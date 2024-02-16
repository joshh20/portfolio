import headShot from "../assets/Business-Headshot.jpeg";
import Links from "../components/Links";

export default function Hero() {
    return (
        <section>
            <div className="mx-4 grid max-w-4xl grid-cols-1 py-8 leading-relaxed text-slate-800 dark:text-slate-200 sm:mx-12 sm:mt-8 sm:grid-cols-2 sm:leading-loose md:gap-x-12 lg:mx-auto">
                <div className="place-self-center">
                    <div className="text-4xl sm:text-6xl md:whitespace-nowrap">
                        I'm Josh Hittie
                    </div>
                    <div className="mt-4 sm:mt-8 sm:text-lg">
                        <p>
                            I'm a web developer that loves creating
                            well-designed and responsive websites, ensuring that
                            they look perfect across all screen sizes, from
                            desktops and laptops to tablets and phones!
                        </p>
                        <br></br>
                        <p>For me, a successful website encompasses:</p>
                        <ul className="list-outside list-disc pl-5">
                            <li>Excellent design</li>
                            <li>Intuitive navigation</li>
                            <li>Fast loading times</li>
                            <li>
                                An engaging user experience that encourages
                                visitors to stay
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-8 lg:gap-12">
                    <img
                        className="m-auto mt-8 h-64 w-64 rounded-full object-cover ring-4 ring-slate-300 drop-shadow-2xl dark:ring-slate-800 sm:m-0 sm:mt-0 md:h-80 md:w-80 lg:h-96 lg:w-96"
                        src={headShot}
                        alt="Josh Hittie's Business Head Shot"
                    />
                    <Links />
                </div>
            </div>
        </section>
    );
}
