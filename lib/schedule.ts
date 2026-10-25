import { hours } from "@/lib/site";
import { minutesFromTime, pad } from "@/lib/format";

export function mexicoToday() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Mexico_City",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export function mexicoNowMinutes() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Mexico_City",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
  const minute = Number(
    parts.find((part) => part.type === "minute")?.value ?? "0",
  );
  return hour * 60 + minute;
}

export function slotsForDuration(duration: number) {
  const slots: string[] = [];
  for (
    let cursor = hours.openMinutes;
    cursor + duration <= hours.closeMinutes;
    cursor += hours.stepMinutes
  ) {
    slots.push(`${pad(Math.floor(cursor / 60))}:${pad(cursor % 60)}`);
  }
  return slots;
}

export function slotStartsInTime(time: string) {
  return /^\d{2}:\d{2}$/.test(time) && minutesFromTime(time) >= 0;
}
