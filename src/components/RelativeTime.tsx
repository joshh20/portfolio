const UNITS: [number, Intl.RelativeTimeFormatUnit, number][] = [
  [60_000, "second", 1_000],
  [60 * 60_000, "minute", 60_000],
  [24 * 60 * 60_000, "hour", 60 * 60_000],
  [30 * 24 * 60 * 60_000, "day", 24 * 60 * 60_000],
  [12 * 30 * 24 * 60 * 60_000, "month", 30 * 24 * 60 * 60_000],
  [Infinity, "year", 12 * 30 * 24 * 60 * 60_000],
];

function parseDate(date: string): Date {
  const parts = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (parts) {
    return new Date(+parts[1], +parts[2] - 1, +parts[3]);
  }
  return new Date(date);
}

function getRelativeTime(date: string): string {
  const diff = Date.now() - parseDate(date).getTime();
  const absDiff = Math.abs(diff);
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  for (const [limit, unit, factor] of UNITS) {
    if (absDiff < limit) {
      return rtf.format(-Math.round(diff / factor), unit);
    }
  }
  return date;
}

interface RelativeTimeProps {
  date: string;
}

export default function RelativeTime({ date }: RelativeTimeProps) {
  const timeElapsed = getRelativeTime(date);

  return <time dateTime={date}>{timeElapsed}</time>;
}
