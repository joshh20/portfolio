export default function Skeleton({
    className = "size-8",
}: {
    className: string;
}) {
    return (
        <div
            className={`bg-slate-200/10 rounded-lg animate-pulse ${className}`}
        />
    );
}
