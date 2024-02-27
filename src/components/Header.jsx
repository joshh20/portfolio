import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";
import DarkModeIcon from "./atoms/DarkModeIcon";

export default function Header({ configData }) {
    // useDarkMode Hook
    const [isDarkMode, toggleDarkMode] = useDarkMode();

    // Set text of name section in Header
    const myName = `${configData.name.first} ${configData.name.last}`;
    const [nameText, setNameText] = useState(myName);
    const handleNameMouseOver = () => setNameText(configData.jobTitle);
    const handleNameMouseOut = () => setNameText(myName);

    return (
        <>
            <header className="bg-slate-50 text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                <div className="mx-4 sm:mx-12">
                    <div className="mx-auto flex max-w-4xl items-center justify-between py-5">
                        {/* Left side */}
                        <Link to="/">
                            <div
                                className="flex w-28 whitespace-nowrap"
                                aria-label={`${myName} is a ${configData.jobTitle}`}
                            >
                                <div
                                    className="transform animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-2xl font-bold text-transparent duration-500 ease-in-out hover:translate-x-4 hover:-skew-y-1 hover:scale-125 hover:from-[#D42406] hover:to-[#EBAD25] hover:drop-shadow-md"
                                    onMouseOver={handleNameMouseOver}
                                    onMouseOut={handleNameMouseOut}
                                >
                                    {nameText}
                                </div>
                            </div>
                        </Link>
                        {/* Center */}
                        <nav className="flex gap-4">
                            {configData.nav.map((item, index) => (
                                <NavLink
                                    key={index}
                                    to={item.link}
                                    className={({ isActive }) =>
                                        `group hidden text-xl font-medium transition hover:font-semibold hover:drop-shadow-md dark:hover:text-slate-200 sm:block ${isActive ? "text-black dark:text-slate-200" : ""}`
                                    }
                                >
                                    {item.name}
                                    <span className="block h-0.5 max-w-0 bg-purple-400 transition-all duration-500 group-hover:max-w-full "></span>
                                </NavLink>
                            ))}
                        </nav>
                        {/* Right side */}
                        <div>
                            <button
                                className="flex items-center justify-center rounded-full border-2 border-gray-300 bg-transparent p-2 ring-gray-300 transition-all hover:ring-2 hover:ring-offset-2 dark:border-gray-700 dark:bg-transparent dark:ring-gray-200 dark:hover:ring-2 dark:hover:ring-offset-2"
                                aria-label="Toggle dark mode"
                                onClick={toggleDarkMode}
                            >
                                <DarkModeIcon isDarkMode={isDarkMode} />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Small screen buttons */}
                <nav className="flex justify-center gap-4 pb-2 sm:hidden">
                    {configData.nav.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.link}
                            className={({ isActive }) =>
                                `${isActive ? "font-bold dark:text-slate-200" : ""}`
                            }
                        >
                            <button className="rounded-lg border-2 border-gray-300 bg-transparent px-2 py-1 ring-gray-300 transition-all hover:font-bold hover:ring-2 hover:ring-offset-2 dark:border-gray-700 dark:bg-transparent dark:ring-gray-200 dark:hover:ring-2 dark:hover:ring-offset-2">
                                {item.name}
                            </button>
                        </NavLink>
                    ))}
                </nav>
            </header>
        </>
    );
}
