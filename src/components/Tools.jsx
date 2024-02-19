import pythonLogo from "../assets/Python-logo.png";
import javascriptLogo from "../assets/JavaScript-logo.png";
import reactLogo from "../assets/React-logo.webp";
import tailwindLogo from "../assets/Tailwind-logo.png";
import dockerLogo from "../assets/Docker-logo.png";

export default function Tools() {
    return (
        <section>
            <div className="mx-4 sm:mx-12">
                <div className="mx-auto my-6 max-w-4xl rounded-md bg-slate-200/10 p-8 text-slate-800 dark:bg-slate-900 dark:text-slate-300 sm:my-8 md:my-20">
                    <h2 className="mb-8 text-center text-2xl font-semibold text-slate-800 dark:text-slate-300">
                        Some languages and tools that I use
                    </h2>
                    <div className="mx-auto flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                        <div className="flex flex-col items-center justify-center">
                            <img
                                src={reactLogo}
                                className="aspect-square w-16 sm:w-24"
                                aria-label="React"
                            />
                            <h3 className="mt-4">React</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img
                                src={javascriptLogo}
                                className="aspect-square w-16 sm:w-24"
                                aria-label="JavaScript"
                            />
                            <h3 className="mt-4">JavaScript</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img
                                src={tailwindLogo}
                                className="aspect-square w-16 sm:w-24"
                                aria-label="Tailwind CSS"
                            />
                            <h3 className="mt-4">Tailwind CSS</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img
                                src={dockerLogo}
                                className="aspect-square w-16 sm:w-24"
                                aria-label="Docker"
                            />
                            <h3 className="mt-4">Docker</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img
                                src={pythonLogo}
                                className="aspect-square w-16 sm:w-24"
                                aria-label="Python"
                            />
                            <h3 className="mt-4">Python</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
