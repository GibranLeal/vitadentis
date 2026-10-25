import { randomBytes } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import {
  addDays,
  isSunday,
  minutesFromTime,
  rangesOverlap,
} from "@/lib/format";
import { getBookingItem } from "@/lib/services";
import {
  mexicoNowMinutes,
  mexicoToday,
  slotsForDuration,
} from "@/lib/schedule";
import { getClinic, getOffice, hours } from "@/lib/site";

export type AppointmentStatus =
  | "pendiente"
  | "confirmada"
  | "atendida"
  | "no-asistio"
  | "cancelada";

export type Appointment = {
  folio: string;
  clinic: string;
  office: string;
  service: string;
  date: string;
  time: string;
  duration: number;
  status: AppointmentStatus;
  patient: {
    name: string;
    phone: string;
    email: string;
    birthdate: string;
    firstVisit: boolean;
    notes: string;
  };
  createdAt: string;
};

export type ContactMessage = {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  createdAt: string;
};

const dataDir = path.join(process.cwd(), "data");

let queue: Promise<unknown> = Promise.resolve();

function withLock<T>(task: () => Promise<T>) {
  const run = queue.then(task, task);
  queue = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

async function readList<T>(fileName: string): Promise<T[]> {
  try {
    const raw = await readFile(path.join(dataDir, fileName), "utf8");
    const parsed = JSON.parse(raw) as T[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeList<T>(fileName: string, list: T[]) {
  await mkdir(dataDir, { recursive: true });
  await writeFile(
    path.join(dataDir, fileName),
    JSON.stringify(list, null, 2),
    "utf8",
  );
}

function cleanText(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

function digits(value: string) {
  let numbers = value.replace(/\D/g, "");
  if (numbers.length === 12 && numbers.startsWith("52")) {
    numbers = numbers.slice(2);
  }
  if (numbers.length === 13 && numbers.startsWith("521")) {
    numbers = numbers.slice(3);
  }
  return numbers;
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validIsoDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  if (month < 1 || month > 12 || day < 1 || day > 31) return false;
  const check = new Date(Date.UTC(year, month - 1, day));
  return (
    check.getUTCFullYear() === year &&
    check.getUTCMonth() === month - 1 &&
    check.getUTCDate() === day
  );
}

export async function availability(input: {
  clinic: string;
  office: string;
  date: string;
  service: string;
}) {
  const clinic = getClinic(input.clinic);
  const office = getOffice(input.office);
  const service = getBookingItem(input.service);
  if (!clinic || !office || !service || !validIsoDate(input.date)) {
    return { error: "No encontramos ese horario." };
  }
  if (isSunday(input.date)) {
    return { slots: [] as { time: string; available: boolean }[] };
  }

  const today = mexicoToday();
  const last = addDays(today, hours.horizonDays);
  if (input.date < today || input.date > last) {
    return { slots: [] as { time: string; available: boolean }[] };
  }

  const appointments = await readList<Appointment>("citas.json");
  const sameDay = appointments.filter(
    (item) =>
      item.clinic === clinic.slug &&
      item.office === office.id &&
      item.date === input.date &&
      item.status !== "cancelada",
  );
  const now = input.date === today ? mexicoNowMinutes() : null;

  const slots = slotsForDuration(service.duration).map((time) => {
    const start = minutesFromTime(time);
    const tooSoon = now !== null && start < now + hours.leadMinutes;
    const taken = sameDay.some((item) =>
      rangesOverlap(start, service.duration, minutesFromTime(item.time), item.duration),
    );
    return { time, available: !tooSoon && !taken };
  });

  return { slots };
}

export type BookingBody = {
  clinic?: unknown;
  office?: unknown;
  service?: unknown;
  date?: unknown;
  time?: unknown;
  company?: unknown;
  privacy?: unknown;
  patient?: {
    name?: unknown;
    phone?: unknown;
    email?: unknown;
    birthdate?: unknown;
    firstVisit?: unknown;
    notes?: unknown;
  };
};

export async function createAppointment(body: BookingBody) {
  if (cleanText(body.company, 80)) {
    return {
      ok: true as const,
      folio: "VD-000000",
      silent: true,
    };
  }

  const clinic = getClinic(cleanText(body.clinic, 40));
  const office = getOffice(cleanText(body.office, 40));
  const service = getBookingItem(cleanText(body.service, 80));
  const date = cleanText(body.date, 10);
  const time = cleanText(body.time, 5);
  const patient = body.patient ?? {};
  const name = cleanText(patient.name, 80);
  const phoneNumber = digits(cleanText(patient.phone, 20));
  const email = cleanText(patient.email, 120).toLowerCase();
  const birthdate = cleanText(patient.birthdate, 10);
  const notes = cleanText(patient.notes, 500);
  const firstVisit = Boolean(patient.firstVisit);

  if (!clinic || !office || !service) {
    return { ok: false as const, error: "Elige consultorio y servicio." };
  }
  if (!body.privacy) {
    return { ok: false as const, error: "Acepta el aviso de privacidad para continuar." };
  }
  if (name.length < 3) {
    return { ok: false as const, error: "Escribe tu nombre completo." };
  }
  if (phoneNumber.length !== 10) {
    return { ok: false as const, error: "El teléfono debe tener 10 dígitos." };
  }
  if (!validEmail(email)) {
    return { ok: false as const, error: "Revisa el correo electrónico." };
  }
  if (!validIsoDate(birthdate) || birthdate > mexicoToday() || birthdate < "1908-01-01") {
    return { ok: false as const, error: "Revisa la fecha de nacimiento." };
  }
  if (!validIsoDate(date) || !/^\d{2}:\d{2}$/.test(time)) {
    return { ok: false as const, error: "Elige fecha y hora." };
  }

  const open = await availability({
    clinic: clinic.slug,
    office: office.id,
    date,
    service: service.slug,
  });
  if ("error" in open) {
    return { ok: false as const, error: open.error };
  }
  const slot = open.slots.find((item) => item.time === time && item.available);
  if (!slot) {
    return {
      ok: false as const,
      error: "Ese horario ya no está disponible. Elige otro.",
    };
  }

  const appointment: Appointment = {
    folio: `VD-${randomBytes(3).toString("hex").toUpperCase()}`,
    clinic: clinic.slug,
    office: office.id,
    service: service.slug,
    date,
    time,
    duration: service.duration,
    status: "pendiente",
    patient: {
      name,
      phone: phoneNumber,
      email,
      birthdate,
      firstVisit,
      notes,
    },
    createdAt: new Date().toISOString(),
  };

  try {
    await withLock(async () => {
      const list = await readList<Appointment>("citas.json");
      const clash = list.some(
        (item) =>
          item.office === appointment.office &&
          item.date === appointment.date &&
          item.status !== "cancelada" &&
          rangesOverlap(
            minutesFromTime(appointment.time),
            appointment.duration,
            minutesFromTime(item.time),
            item.duration,
          ),
      );
      if (clash) throw new Error("taken");
      list.push(appointment);
      await writeList("citas.json", list);
    });
  } catch (error) {
    if (error instanceof Error && error.message === "taken") {
      return {
        ok: false as const,
        error: "Ese horario acaba de ocuparse. Elige otro.",
      };
    }
    return {
      ok: false as const,
      error: "No pudimos guardar la cita. Intenta de nuevo o escríbenos por WhatsApp.",
    };
  }

  return {
    ok: true as const,
    silent: false,
    folio: appointment.folio,
    officeName: office.name,
    officeAddress: `${office.address}, ${office.colony}`,
    serviceName: service.name,
    date: appointment.date,
    time: appointment.time,
    duration: appointment.duration,
    patientName: appointment.patient.name,
  };
}

export async function saveContact(input: {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
}) {
  if (cleanText(input.company, 80)) {
    return { ok: true as const, silent: true };
  }
  const name = cleanText(input.name, 80);
  const phoneNumber = digits(cleanText(input.phone, 20));
  const email = cleanText(input.email, 120).toLowerCase();
  const message = cleanText(input.message, 800);
  if (name.length < 3) {
    return { ok: false as const, error: "Escribe tu nombre." };
  }
  if (phoneNumber.length !== 10) {
    return { ok: false as const, error: "El teléfono debe tener 10 dígitos." };
  }
  if (!validEmail(email)) {
    return { ok: false as const, error: "Revisa el correo electrónico." };
  }
  if (message.length < 8) {
    return { ok: false as const, error: "Cuéntanos un poco más en el mensaje." };
  }

  const entry: ContactMessage = {
    id: randomBytes(4).toString("hex"),
    name,
    phone: phoneNumber,
    email,
    message,
    createdAt: new Date().toISOString(),
  };

  await withLock(async () => {
    const list = await readList<ContactMessage>("mensajes.json");
    list.push(entry);
    await writeList("mensajes.json", list);
  });

  return { ok: true as const, silent: false };
}
