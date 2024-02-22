import { useOutletContext } from "react-router-dom";
export default function ProjectCard() {
    const configData = useOutletContext();

    const technologiesMap = new Map(
        configData.technologies.map((tech) => [tech.name, tech]),
    );

    return (
        <section>
            <div className="mx-4 sm:mx-12">
                {configData.projects.map((project, projectIndex) => (
                    <div
                        key={projectIndex}
                        className="mx-auto my-6 max-w-4xl rounded-md bg-slate-200/10 p-4 text-slate-800 shadow-md dark:bg-slate-900 dark:text-slate-300 sm:my-14 sm:p-8"
                    >
                        <h3 className="mb-3 cursor-pointer text-4xl font-bold transition duration-200 ease-in-out hover:drop-shadow-lg sm:mb-6">
                            <a
                                href={project.url}
                                target="_blank"
                                aria-label={`Link to ${project.name} website`}
                            >
                                {project.name}
                            </a>
                        </h3>
                        <div className="flex justify-center">
                            <video
                                src={project.short}
                                playsInline
                                disablePictureInPicture={true}
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                className="mb-4 rounded-md sm:mb-8"
                                aria-label={`${project.name} video demonstration`}
                            ></video>
                        </div>
                        <p className="whitespace-pre-line font-semibold leading-relaxed sm:text-lg">
                            {project.description}
                        </p>
                        <div className="my-8 text-center">
                            <a
                                href={project.url}
                                target="_blank"
                                className="rounded-lg border-2 border-gray-300/30 bg-slate-50/80 px-2 py-1 font-semibold ring-slate-50 transition-all hover:ring-2 dark:border-gray-700 dark:bg-transparent dark:ring-gray-200 dark:hover:ring-2 dark:hover:ring-offset-2"
                            >
                                Visit website
                            </a>
                        </div>
                        <div className="mt-12 text-center text-2xl font-semibold">
                            Built with
                            <div className="mt-4 flex flex-wrap justify-center gap-8 text-base sm:gap-12">
                                {project.technologiesUsed.map(
                                    (techName, techIndex) => {
                                        const tech =
                                            technologiesMap.get(techName);
                                        return (
                                            tech && (
                                                <div
                                                    key={techIndex}
                                                    className="flex flex-col items-center justify-center duration-200 hover:scale-125"
                                                >
                                                    <img
                                                        src={tech.image}
                                                        className="aspect-square w-16 sm:w-24"
                                                        aria-label={tech.name}
                                                    />
                                                    <h3 className="mt-4">
                                                        {tech.name}
                                                    </h3>
                                                </div>
                                            )
                                        );
                                    },
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
