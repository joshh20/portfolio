import RelativeTime from "@/components/atoms/RelativeTime";

export default function RelativeTimeWrapper({ date }: { date: string }) {
    const formatted = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <time dateTime={date}>
            <RelativeTime date={date} />
            <noscript>{formatted}</noscript>
        </time>
    );
}
