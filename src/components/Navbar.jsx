import React from "react";
import FlipCard from "./FlipCard";

export default function Navbar() {
    const myName = "Josh Hittie";
    const [nameText, setNameText] = React.useState(myName);

    const handleNameMouseOver = () => {
        setNameText("Web Developer");
    };

    const handleNameMouseOut = () => {
        setNameText(myName);
    };

    return (
        <>
            <nav className="flex justify-evenly items-center bg-red-200 py-5">
                <div className="relative flex items-center whitespace-nowrap">
                    {/* Re-examine this later. I can't get the gradient styles to apply properly */}
                    {/* <FlipCard textFront={myName} textBack={"Web Developer"}
                        tailwindShared={"text-2xl"}
                        tailwindFrontCard={""}
                        tailwindBackCard={""} /> */}
                    <div className="absolute text-2xl bg-gradient-to-br from-cyan-500 from-10% to-blue-600 to-80% text-transparent bg-clip-text hover:drop-shadow-md hover:from-[#D42406] hover:to-[#EBAD25] transform duration-500 ease-in-out hover:scale-125 hover:-skew-y-1 " onMouseOver={handleNameMouseOver} onMouseOut={handleNameMouseOut}>{nameText}</div>
                </div>
                <div className="flex gap-4 md:gap-8 font-medium text-xl text-slate-700">
                    <a href="#" className="hover:text-black hover:font-semibold hover:drop-shadow-md">About</a>
                    <div>Projects</div>
                </div>
                <div>
                    Dark mode
                </div>
            </nav>
        </>
    );
}