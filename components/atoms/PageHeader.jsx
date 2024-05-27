export default function PageHeader({ title }) {
    return (
        <h1 className="mb-4 text-3xl font-bold text-slate-800 duration-500 dark:text-slate-300 sm:text-4xl">
            {title}
        </h1>
    );
}
