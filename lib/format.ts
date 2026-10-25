const MONTHS = [
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

const WEEKDAYS = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

export function formatDate(iso: string) {
  const [year, month, day] = iso.split("-");
  const monthName = MONTHS[Number(month) - 1];
  if (!year || !monthName || !day) return iso;
  return `${Number(day)} de ${monthName} de ${year}`;
}

/** Domingo = 0. Calendario gregoriano, sin zona horaria. */
export function weekdayIndex(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  const offsets = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
  let y = year;
  if (month < 3) y -= 1;
  return (
    (y +
      Math.floor(y / 4) -
      Math.floor(y / 100) +
      Math.floor(y / 400) +
      offsets[month - 1] +
      day) %
    7
  );
}

export function weekdayName(iso: string) {
  return WEEKDAYS[weekdayIndex(iso)] ?? "";
}

export function formatDateWithWeekday(iso: string) {
  const name = weekdayName(iso);
  return name ? `${name} ${formatDate(iso)}` : formatDate(iso);
}

export function isSunday(iso: string) {
  return weekdayIndex(iso) === 0;
}

export function daysInMonth(year: number, month: number) {
  if (month === 2) {
    const leap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    return leap ? 29 : 28;
  }
  return [4, 6, 9, 11].includes(month) ? 30 : 31;
}

export function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function toIso(year: number, month: number, day: number) {
  return `${year}-${pad(month)}-${pad(day)}`;
}

export function addDays(iso: string, amount: number) {
  const [year, month, day] = iso.split("-").map(Number);
  const utc = new Date(Date.UTC(year, month - 1, day));
  utc.setUTCDate(utc.getUTCDate() + amount);
  return utc.toISOString().slice(0, 10);
}

export function minutesFromTime(time: string) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

export function rangesOverlap(
  startA: number,
  durationA: number,
  startB: number,
  durationB: number,
) {
  return startA < startB + durationB && startB < startA + durationA;
}
