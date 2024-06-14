export default function PageSubHeader({ text }: { text: string }) {
    return (
        <h2 className="mb-4 font-semibold text-slate-800 duration-500 dark:text-slate-300 sm:text-lg">
            {text}
        </h2>
    );
}
