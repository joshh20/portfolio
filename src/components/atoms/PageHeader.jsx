export default function PageHeader({ title }) {
    return (
        <h1 className="mb-4 text-4xl font-bold text-slate-800 duration-500 dark:text-slate-300 sm:text-5xl">
            {title}
        </h1>
    );
}
