import Links from "../components/Links";
import { configData } from "@/assets/configData";
import Image from "next/image";

export default function Hero() {
    return (
        <section>
            <div className="grid grid-cols-1 leading-relaxed text-slate-800 dark:text-slate-300 sm:grid-cols-2 sm:leading-loose md:gap-x-12">
                <div className="place-self-center">
                    {/* I'm {first name} {last name} */}
                    <div className="text-4xl font-bold sm:text-6xl">
                        <p>I&apos;m</p>
                        <p>
                            {configData.name.first} {configData.name.last}
                        </p>
                    </div>
                    {/* Description and list */}
                    <div className="mt-4 font-semibold sm:mt-8 sm:text-lg">
                        <p>{configData.pages.homePage.hero.description}</p>
                        <br></br>
                        <p>{configData.pages.homePage.hero.listTitle}</p>
                        <ul className="list-outside list-disc pl-5">
                            {configData.pages.homePage.hero.listItems.map(
                                (item, index) => (
                                    <li key={index}>{item}</li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
                {/* Head shot image */}
                <div className="flex flex-col items-center justify-center gap-8 lg:gap-12">
                    <Image
                        className="m-auto mt-8 h-64 w-64 rounded-full object-cover object-top ring-4 ring-slate-300 drop-shadow-2xl transition duration-200 hover:scale-105 dark:ring-slate-800 sm:m-0 sm:mt-0 md:h-80 md:w-80 lg:h-96 lg:w-96"
                        src={`/${configData.metadata.businessHeadshot.filenameAvif}`}
                        priority={true}
                        height={configData.metadata.businessHeadshot.height}
                        width={configData.metadata.businessHeadshot.width}
                        alt={`${configData.name.first} ${configData.name.last}'s Business Head Shot`}
                    />
                    {/* Social media links */}
                    <Links />
                </div>
            </div>
        </section>
    );
}
