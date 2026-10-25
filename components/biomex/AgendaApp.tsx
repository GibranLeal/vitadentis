"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  addDays,
  daysInMonth,
  formatDateWithWeekday,
  isSunday,
  pad,
  toIso,
  weekdayIndex,
} from "@/lib/format";
import { bookingCatalog, getBookingItem } from "@/lib/services";
import { mexicoToday } from "@/lib/schedule";
import { getClinic, getOffice, hours, offices, phone, whatsappLink } from "@/lib/site";

type Slot = { time: string; available: boolean };
type Step = 1 | 2 | 3 | 4 | 5;
type Confirmation = {
  folio: string;
  officeName: string;
  officeAddress: string;
  serviceName: string;
  date: string;
  time: string;
  duration: number;
  patientName: string;
};

const monthNames = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const stepLabels = ["Consultorio", "Motivo", "Horario", "Tus datos"];

export function AgendaApp({ clinicSlug }: { clinicSlug: string }) {
  const clinic = getClinic(clinicSlug);
  const rootRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState<Step>(1);
  const [officeId, setOfficeId] = useState("");
  const [serviceSlug, setServiceSlug] = useState("");
  const [todayIso, setTodayIso] = useState<string | null>(null);
  const [visible, setVisible] = useState<{ year: number; month: number } | null>(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [slots, setSlots] = useState<Slot[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [slotsError, setSlotsError] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [firstVisit, setFirstVisit] = useState("");
  const [notes, setNotes] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [company, setCompany] = useState("");
  const [privacyHref, setPrivacyHref] = useState("/aviso-de-privacidad");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const current = mexicoToday();
      const [year, month] = current.split("-").map(Number);
      setTodayIso(current);
      setVisible({ year, month });
      const params = new URLSearchParams(window.location.search);
      const requestedOffice = params.get("consultorio") ?? "";
      const requestedService = params.get("servicio") ?? "";
      if (offices.some((item) => item.id === requestedOffice)) {
        setOfficeId(requestedOffice);
      }
      if (getBookingItem(requestedService)) setServiceSlug(requestedService);
      const host = window.location.hostname;
      if (host !== "localhost" && host !== "127.0.0.1" && !host.endsWith("vitadentis.mx")) {
        setPrivacyHref("https://vitadentis.mx/aviso-de-privacidad");
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const send = () => {
      window.parent.postMessage(
        { type: "biomex:resize", height: node.offsetHeight },
        "*",
      );
    };
    send();
    const observer = new ResizeObserver(send);
    observer.observe(node);
    return () => observer.disconnect();
  }, [step, slots.length, error, slotsLoading, slotsError, confirmation]);

  useEffect(() => {
    if (!date || !officeId || !serviceSlug) return;
    const controller = new AbortController();
    const params = new URLSearchParams({
      clinic: clinicSlug,
      office: officeId,
      date,
      service: serviceSlug,
    });
    fetch(`/api/biomex/disponibilidad?${params}`, {
      signal: controller.signal,
      cache: "no-store",
    })
      .then(async (response) => {
        const data = (await response.json()) as { slots?: Slot[]; error?: string };
        if (!response.ok) throw new Error(data.error || "error");
        setSlots(data.slots ?? []);
      })
      .catch((reason: unknown) => {
        if (reason instanceof DOMException && reason.name === "AbortError") return;
        setSlotsError("No pudimos cargar los horarios. Intenta otra fecha o escríbenos.");
      })
      .finally(() => {
        if (!controller.signal.aborted) setSlotsLoading(false);
      });
    return () => controller.abort();
  }, [date, officeId, serviceSlug, clinicSlug]);

  if (!clinic) {
    return (
      <p className="p-8 text-ink">Este consultorio no tiene agenda activa en Biomex.</p>
    );
  }

  const service = getBookingItem(serviceSlug);
  const office = getOffice(officeId);
  const catalog = bookingCatalog();
  const lastDay = todayIso ? addDays(todayIso, hours.horizonDays) : "";

  function shiftMonth(delta: number) {
    if (!visible) return;
    const cursor = new Date(Date.UTC(visible.year, visible.month - 1 + delta, 1));
    setVisible({ year: cursor.getUTCFullYear(), month: cursor.getUTCMonth() + 1 });
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const response = await fetch("/api/biomex/citas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clinic: clinicSlug,
          office: officeId,
          service: serviceSlug,
          date,
          time,
          privacy,
          company,
          patient: {
            name,
            phone: phoneNumber,
            email,
            birthdate,
            firstVisit: firstVisit === "si",
            notes,
          },
        }),
      });
      const data = (await response.json()) as Confirmation & {
        error?: string;
        silent?: boolean;
      };
      if (!response.ok) {
        setError(data.error || "No pudimos registrar la cita.");
        return;
      }
      if (data.silent || !data.officeName) {
        setConfirmation(null);
        setStep(5);
        return;
      }
      setConfirmation(data);
      setStep(5);
    } catch {
      setError("No hay conexión. Intenta de nuevo o escríbenos por WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  }

  const cells = visible
    ? calendarCells(visible.year, visible.month)
    : [];

  return (
    <div ref={rootRef} className="bg-white text-navy">
      <div className="flex items-start justify-between gap-4 border-b border-[#E4EEEC] px-5 py-4 sm:px-6">
        <div>
          <p className="font-mono text-[11px] tracking-[0.18em] text-[#0E8F86]">BIOMEX</p>
          <h2 className="font-display text-xl font-semibold">Agenda tu cita</h2>
        </div>
        <p className="text-right text-sm text-ink">
          <span className="block font-semibold text-navy">{clinic.name}</span>
          {clinic.city}
        </p>
      </div>

      {step < 5 ? (
        <ol className="grid grid-cols-4 gap-2 px-5 py-4 sm:px-6">
          {stepLabels.map((label, index) => {
            const number = (index + 1) as Step;
            const current = step === number;
            const done = step > number;
            return (
              <li key={label}>
                <span
                  className={`mb-1 block h-1 rounded-full ${done || current ? "bg-[#0E8F86]" : "bg-[#E4EEEC]"}`}
                />
                <span className={`text-[11px] sm:text-xs ${current ? "font-semibold text-navy" : "text-ink"}`}>
                  {label}
                </span>
              </li>
            );
          })}
        </ol>
      ) : null}

      <div className="px-5 pb-6 sm:px-6">
        {error ? (
          <p role="alert" className="mb-4 rounded-2xl bg-[#FDECEC] px-4 py-3 text-sm text-[#8C2F2F]">
            {error}
          </p>
        ) : null}

        {step === 1 ? (
          <div>
            <p className="text-ink">Elige el consultorio. Los dos atienden de lunes a sábado.</p>
            <div className="mt-4 grid gap-3">
              {offices.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setOfficeId(item.id)}
                  className={`rounded-3xl border px-4 py-4 text-left transition ${officeId === item.id ? "border-[#0E8F86] bg-[#F3FBFA]" : "border-[#E4EEEC] hover:border-[#0E8F86]"}`}
                  aria-pressed={officeId === item.id}
                >
                  <span className="block font-display text-lg font-semibold">{item.name}</span>
                  <span className="mt-1 block text-sm text-ink">
                    {item.address}. {item.colony}
                  </span>
                </button>
              ))}
            </div>
            <button
              type="button"
              className="mt-5 h-12 w-full rounded-full bg-[#102033] font-display font-semibold text-white disabled:opacity-40"
              disabled={!officeId}
              onClick={() => setStep(2)}
            >
              Continuar
            </button>
          </div>
        ) : null}

        {step === 2 ? (
          <div>
            <p className="text-ink">Cuéntanos el motivo. Si no estás seguro, elige la valoración.</p>
            <div className="mt-4 grid max-h-[420px] gap-2 overflow-auto pr-1">
              {catalog.map((item) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setServiceSlug(item.slug)}
                  className={`rounded-2xl border px-4 py-3 text-left ${serviceSlug === item.slug ? "border-[#0E8F86] bg-[#F3FBFA]" : "border-[#E4EEEC]"}`}
                  aria-pressed={serviceSlug === item.slug}
                >
                  <span className="block font-semibold">{item.name}</span>
                  <span className="mt-1 block text-sm text-ink">
                    {item.summary} · {item.durationLabel}
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-5 flex gap-3">
              <button type="button" className="h-12 flex-1 rounded-full border border-[#E4EEEC]" onClick={() => setStep(1)}>
                Atrás
              </button>
              <button
                type="button"
                className="h-12 flex-[2] rounded-full bg-[#102033] font-display font-semibold text-white disabled:opacity-40"
                disabled={!serviceSlug}
                onClick={() => setStep(3)}
              >
                Ver horarios
              </button>
            </div>
          </div>
        ) : null}

        {step === 3 ? (
          <div>
            {!visible || !todayIso ? (
              <p className="text-ink">Preparando el calendario…</p>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <button type="button" className="h-10 rounded-full px-3 text-sm" onClick={() => shiftMonth(-1)} disabled={visible.year === Number(todayIso.slice(0, 4)) && visible.month === Number(todayIso.slice(5, 7))}>
                    Anterior
                  </button>
                  <p className="font-display font-semibold capitalize">
                    {monthNames[visible.month - 1]} {visible.year}
                  </p>
                  <button
                    type="button"
                    className="h-10 rounded-full px-3 text-sm"
                    onClick={() => shiftMonth(1)}
                    disabled={toIso(visible.year, visible.month, 1) >= lastDay.slice(0, 8) + "01"}
                  >
                    Siguiente
                  </button>
                </div>
                <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[11px] uppercase tracking-wide text-ink">
                  {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>
                <div className="mt-1 grid grid-cols-7 gap-1">
                  {cells.map((iso, index) => {
                    if (!iso) return <span key={`empty-${index}`} />;
                    const disabled = isSunday(iso) || iso < todayIso || iso > lastDay;
                    const selected = iso === date;
                    return (
                      <button
                        key={iso}
                        type="button"
                        disabled={disabled}
                        onClick={() => {
                          setDate(iso);
                          setTime("");
                          setSlots([]);
                          setSlotsLoading(true);
                          setSlotsError("");
                        }}
                        className={`h-10 rounded-xl text-sm ${selected ? "bg-[#102033] text-white" : "hover:bg-[#F3FBFA]"} disabled:text-[#C5CED0]`}
                      >
                        {Number(iso.slice(8))}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-5">
                  {!date ? <p className="text-sm text-ink">Elige un día. Los domingos el consultorio está cerrado.</p> : null}
                  {date && slotsLoading ? <p className="text-sm text-ink">Buscando horarios…</p> : null}
                  {slotsError ? <p className="text-sm text-[#8C2F2F]">{slotsError}</p> : null}
                  {date && !slotsLoading && !slotsError ? (
                    slots.some((slot) => slot.available) ? (
                      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                        {slots.map((slot) => (
                          <button
                            key={slot.time}
                            type="button"
                            disabled={!slot.available}
                            aria-pressed={time === slot.time}
                            onClick={() => setTime(slot.time)}
                            className={`h-11 rounded-full border text-sm ${time === slot.time ? "border-[#102033] bg-[#102033] text-white" : "border-[#E4EEEC]"} disabled:opacity-35`}
                          >
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-ink">Ese día no tiene horarios libres. Prueba con otro.</p>
                    )
                  ) : null}
                </div>
              </>
            )}
            <div className="mt-5 flex gap-3">
              <button type="button" className="h-12 flex-1 rounded-full border border-[#E4EEEC]" onClick={() => setStep(2)}>
                Atrás
              </button>
              <button
                type="button"
                className="h-12 flex-[2] rounded-full bg-[#102033] font-display font-semibold text-white disabled:opacity-40"
                disabled={!date || !time}
                onClick={() => setStep(4)}
              >
                Continuar
              </button>
            </div>
          </div>
        ) : null}

        {step === 4 ? (
          <form onSubmit={onSubmit}>
            <p className="rounded-2xl bg-[#F3FBFA] px-4 py-3 text-sm text-ink">
              {service?.name} · {office?.name}
              <br />
              <span className="font-semibold text-navy">
                {formatDateWithWeekday(date)} · {time} h
              </span>
            </p>
            <Field label="Nombre completo" value={name} onChange={setName} autoComplete="name" />
            <Field label="WhatsApp" value={phoneNumber} onChange={setPhoneNumber} autoComplete="tel" inputMode="tel" />
            <Field label="Correo" value={email} onChange={setEmail} autoComplete="email" inputMode="email" />
            <label className="mt-4 block text-sm font-semibold">
              Fecha de nacimiento
              <input
                required
                type="date"
                max={todayIso ?? undefined}
                value={birthdate}
                onChange={(event) => setBirthdate(event.target.value)}
                className="mt-2 h-12 w-full rounded-2xl border border-[#E4EEEC] px-4 font-normal"
              />
            </label>
            <p className="mt-2 text-xs text-ink">Si la cita es para un menor, la solicita madre, padre o tutor.</p>
            <fieldset className="mt-4">
              <legend className="text-sm font-semibold">¿Es tu primera vez en Vita Dentis?</legend>
              <div className="mt-2 flex gap-3">
                {[
                  ["si", "Sí, primera vez"],
                  ["no", "Ya soy paciente"],
                ].map(([value, label]) => (
                  <label key={value} className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="primera"
                      value={value}
                      checked={firstVisit === value}
                      onChange={() => setFirstVisit(value)}
                      required
                    />
                    {label}
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="mt-4 block text-sm font-semibold">
              Comentarios
              <textarea
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                rows={3}
                className="mt-2 w-full rounded-2xl border border-[#E4EEEC] px-4 py-3 font-normal"
                placeholder="Dolor, horarios, si vienes con miedo o con alguien más de la familia"
              />
            </label>
            <div className="absolute -left-[9999px] h-0 overflow-hidden" aria-hidden="true">
              <label>
                Empresa
                <input tabIndex={-1} autoComplete="off" value={company} onChange={(event) => setCompany(event.target.value)} />
              </label>
            </div>
            <label className="mt-4 flex items-start gap-3 text-sm text-ink">
              <input
                type="checkbox"
                className="mt-1"
                checked={privacy}
                onChange={(event) => setPrivacy(event.target.checked)}
                required
              />
              <span>
                Leí y acepto el{" "}
                <a className="font-semibold text-[#0E8F86] underline" href={privacyHref} target="_blank" rel="noopener noreferrer">
                  aviso de privacidad
                </a>
                . La cita queda pendiente hasta que el consultorio la confirme.
              </span>
            </label>
            <div className="mt-5 flex gap-3">
              <button type="button" className="h-12 flex-1 rounded-full border border-[#E4EEEC]" onClick={() => setStep(3)}>
                Atrás
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="h-12 flex-[2] rounded-full bg-[#0E8F86] font-display font-semibold text-white disabled:opacity-50"
              >
                {submitting ? "Enviando…" : "Solicitar cita"}
              </button>
            </div>
          </form>
        ) : null}

        {step === 5 ? (
          <div>
            <p className="font-mono text-[11px] tracking-[0.16em] text-[#0E8F86]">SOLICITUD RECIBIDA</p>
            <h3 className="mt-2 font-display text-3xl font-semibold">Te esperamos</h3>
            {confirmation ? (
              <>
                <p className="mt-3 text-ink">
                  {confirmation.patientName}, tu solicitud quedó registrada con el folio{" "}
                  <span className="font-mono font-medium text-navy">{confirmation.folio}</span>.
                  Está pendiente de confirmación. Te escribimos por WhatsApp.
                </p>
                <dl className="mt-5 space-y-2 rounded-3xl bg-[#F7FAFA] p-4 text-sm">
                  <Row label="Servicio" value={confirmation.serviceName} />
                  <Row label="Consultorio" value={`${confirmation.officeName}. ${confirmation.officeAddress}`} />
                  <Row label="Cuándo" value={`${formatDateWithWeekday(confirmation.date)} · ${confirmation.time} h`} />
                </dl>
                <div className="mt-5 flex flex-col gap-3">
                  <button type="button" className="h-12 rounded-full bg-[#102033] font-display font-semibold text-white" onClick={() => downloadIcs(confirmation)}>
                    Agregar a mi calendario
                  </button>
                  <a
                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#E4EEEC] font-semibold"
                    href={googleCalendarUrl(confirmation)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir en Google Calendar
                  </a>
                  <a
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#0E8F86] font-display font-semibold text-white"
                    href={whatsappLink(
                      `Hola, acabo de solicitar una cita en Vita Dentis. Folio ${confirmation.folio}. ${confirmation.serviceName} en ${confirmation.officeName}, ${formatDateWithWeekday(confirmation.date)} a las ${confirmation.time}. A nombre de ${confirmation.patientName}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Avisar por WhatsApp
                  </a>
                </div>
              </>
            ) : (
              <p className="mt-3 text-ink">Recibimos tu solicitud. Si no ves el folio, escríbenos al {phone.display}.</p>
            )}
          </div>
        ) : null}

        <p className="mt-6 text-center text-xs text-ink">
          Ventana de citas Biomex · {phone.display}
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  autoComplete,
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete: string;
  inputMode?: "tel" | "email";
}) {
  return (
    <label className="mt-4 block text-sm font-semibold">
      {label}
      <input
        required
        value={value}
        autoComplete={autoComplete}
        inputMode={inputMode}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-12 w-full rounded-2xl border border-[#E4EEEC] px-4 font-normal"
      />
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <dt className="w-24 shrink-0 text-ink">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}

function calendarCells(year: number, month: number) {
  const lead = (weekdayIndex(toIso(year, month, 1)) + 6) % 7;
  const cells: Array<string | null> = Array.from({ length: lead }, () => null);
  const total = daysInMonth(year, month);
  for (let day = 1; day <= total; day += 1) cells.push(toIso(year, month, day));
  return cells;
}

function downloadIcs(confirmation: Confirmation) {
  const start = `${confirmation.date.replaceAll("-", "")}T${confirmation.time.replace(":", "")}00`;
  const [hour, minute] = confirmation.time.split(":").map(Number);
  const endMinutes = hour * 60 + minute + confirmation.duration;
  const end = `${confirmation.date.replaceAll("-", "")}T${pad(Math.floor(endMinutes / 60))}${pad(endMinutes % 60)}00`;
  const body = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Biomex//Vita Dentis//ES",
    "BEGIN:VEVENT",
    `DTSTART:${start}`,
    `DTEND:${end}`,
    "SUMMARY:Cita en Vita Dentis",
    `LOCATION:${confirmation.officeAddress}`,
    `DESCRIPTION:Folio ${confirmation.folio}. ${confirmation.serviceName}. Pendiente de confirmación.`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const blob = new Blob([body], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `cita-${confirmation.folio}.ics`;
  link.click();
  URL.revokeObjectURL(url);
}

function googleCalendarUrl(confirmation: Confirmation) {
  const [year, month, day] = confirmation.date.split("-").map(Number);
  const [hour, minute] = confirmation.time.split(":").map(Number);
  const start = new Date(Date.UTC(year, month - 1, day, hour + 6, minute));
  const end = new Date(start.getTime() + confirmation.duration * 60000);
  const stamp = (value: Date) =>
    value.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Cita en Vita Dentis",
    dates: `${stamp(start)}/${stamp(end)}`,
    details: `Folio ${confirmation.folio}. ${confirmation.serviceName}.`,
    location: confirmation.officeAddress,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}
