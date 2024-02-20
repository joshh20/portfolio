import { useOutletContext } from "react-router-dom";
export default function Tools() {
    const configData = useOutletContext();
    return (
        <section>
            <div className="mx-4 sm:mx-12">
                <div className="mx-auto my-6 max-w-4xl rounded-md bg-slate-200/10 p-8 text-slate-800 shadow-md dark:bg-slate-900 dark:text-slate-300 sm:my-8 md:my-20">
                    <h2 className="mb-8 text-center text-2xl font-semibold text-slate-800 dark:text-slate-300">
                        Some languages and tools that I use
                    </h2>
                    <div className="mx-auto flex flex-wrap items-center justify-center gap-x-12 gap-y-8 font-semibold">
                        {configData.technologies
                            .filter((item) => item.highlight)
                            .map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center"
                                >
                                    <img
                                        src={item.image}
                                        className="aspect-square w-16 sm:w-24"
                                        aria-label={item.name}
                                    />
                                    <h3 className="mt-4">{item.name}</h3>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
