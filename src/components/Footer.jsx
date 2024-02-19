export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="mx-auto max-w-4xl py-4 text-center font-semibold text-slate-800 dark:text-slate-300 md:mt-20">
                <span>© Josh Hittie {currentYear}</span>
            </div>
        </footer>
    );
}
