import Links from "../components/Links";
import { useOutletContext } from "react-router-dom";

export default function Hero() {
    const configData = useOutletContext();
    return (
        <section>
            <div className="mx-4 grid max-w-4xl grid-cols-1 py-8 leading-relaxed text-slate-800 dark:text-slate-300 sm:mx-12 sm:mt-8 sm:grid-cols-2 sm:leading-loose md:gap-x-12 lg:mx-auto">
                <div className="place-self-center">
                    <div className="text-4xl font-bold sm:text-6xl">
                        <p>I'm</p>
                        <p>
                            {configData.name.first} {configData.name.last}
                        </p>
                    </div>
                    <div className="mt-4 font-semibold sm:mt-8 sm:text-lg">
                        <p>{configData.hero.description}</p>
                        <br></br>
                        <p>{configData.hero.listTitle}</p>
                        <ul className="list-outside list-disc pl-5">
                            {configData.hero.listItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-8 lg:gap-12">
                    <img
                        className="m-auto mt-8 h-64 w-64 rounded-full object-cover ring-4 ring-slate-300 drop-shadow-2xl transition duration-200 hover:scale-105 dark:ring-slate-800 sm:m-0 sm:mt-0 md:h-80 md:w-80 lg:h-96 lg:w-96"
                        src={configData.hero.image}
                        alt={`${configData.name.first} ${configData.name.last}'s Business Head Shot`}
                    />
                    <Links />
                </div>
            </div>
        </section>
    );
}
