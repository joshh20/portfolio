import { useOutletContext } from "react-router-dom";
export default function ProjectCard() {
    const configData = useOutletContext();
    return (
        <section>
            <div className="mx-4 sm:mx-12">
                {configData.projects.map((project, projectIndex) => (
                    <div
                        key={projectIndex}
                        className="mx-auto my-6 max-w-4xl rounded-md bg-slate-200/10 p-8 text-slate-800 shadow-md dark:bg-slate-900 dark:text-slate-300 sm:my-8 md:my-20"
                    >
                        <h3 className="text-4xl font-bold">{project.name}</h3>
                        <a
                            href={project.url}
                            target="_blank"
                            className="text-blue-600 hover:text-blue-800"
                        >
                            {project.url}
                        </a>
                        <video
                            src={project.short}
                            controls
                            className="my-2"
                        ></video>
                        <p>{project.description}</p>
                        <div className="mt-2">
                            {project.technologiesUsed.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
