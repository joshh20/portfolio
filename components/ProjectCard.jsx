import { useOutletContext } from "react-router-dom";
export default function ProjectCard() {
    const configData = useOutletContext();

    const technologiesMap = new Map(
        configData.technologies.map((tech) => [tech.name, tech]),
    );

    return (
        <>
            {configData.projects.map((project, projectIndex) => (
                <section key={projectIndex} className="pb-4 sm:pb-6">
                    <details
                        className="rounded-md bg-slate-200/10 p-4 text-slate-800 shadow-md open:duration-500 dark:bg-slate-900 dark:text-slate-300 sm:open:p-8 [&_svg]:open:-rotate-180"
                        open={projectIndex === 0 ? true : false}
                    >
                        {/* Project's title */}
                        <summary className="flex cursor-pointer items-center gap-4 text-xl font-semibold transition duration-300 ease-in-out hover:drop-shadow-lg sm:text-2xl [&::-webkit-details-marker]:hidden">
                            <div>
                                <svg
                                    className="w-8 rotate-0 transform text-blue-700 duration-500 sm:w-12"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                            <div>{project.name}</div>
                        </summary>
                        {/* Project's description */}
                        <p className="my-6 whitespace-pre-line font-semibold leading-relaxed sm:text-lg">
                            {project.description}
                        </p>
                        {/* Project's short video */}
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
                        {/* Project's visit website button */}
                        <div className="my-8 text-center">
                            <a
                                href={project.url}
                                target="_blank"
                                className="rounded-lg border-2 border-gray-300/30 bg-slate-50/80 px-2 py-1 font-semibold ring-slate-50 transition-all hover:ring-2 dark:border-gray-700 dark:bg-transparent dark:ring-gray-200 dark:hover:ring-2 dark:hover:ring-offset-2"
                            >
                                Visit website
                            </a>
                        </div>
                        {/* Project's technologies used */}
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
                                                        className="aspect-square w-12 sm:w-20"
                                                        aria-label={tech.name}
                                                        loading="lazy"
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
                    </details>
                </section>
            ))}
        </>
    );
}
