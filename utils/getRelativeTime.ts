export const dynamic = "force-dynamic";

export default function getRelativeTime(date: string): string {
    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
    const now = new Date();
    const postDate = new Date(date);

    // Check if the date is valid
    if (isNaN(postDate.getTime())) {
        return "Invalid date";
    }

    const elapsed = now.getTime() - postDate.getTime();

    // Handle future dates
    if (elapsed < 0) {
        return "In the future";
    }

    const units = [
        { max: 60, name: "second", factor: 1000 },
        { max: 60, name: "minute", factor: 60 * 1000 },
        { max: 24, name: "hour", factor: 60 * 60 * 1000 },
        { max: 30, name: "day", factor: 24 * 60 * 60 * 1000 },
        { max: 12, name: "month", factor: 30 * 24 * 60 * 60 * 1000 },
        { max: Infinity, name: "year", factor: 12 * 30 * 24 * 60 * 60 * 1000 },
    ] as const;

    for (const { max, name, factor } of units) {
        const amount = Math.floor(elapsed / factor);
        if (amount < max) {
            return rtf.format(-amount, name);
        }
    }

    return "";
}
