import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { DarkContext } from "../layouts/Layout";

const DarkModeIcon = ({ isDarkMode }) => {
    if (isDarkMode) {
        return (
            <svg
                fill="none"
                strokeWidth={1.5}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                aria-label="Switch to light color mode"
                className="h-6 w-auto sm:h-8"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
            </svg>
        );
    } else {
        return (
            <svg
                fill="none"
                strokeWidth={1.5}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                aria-label="Switch to dark color mode"
                className="h-6 w-auto sm:h-8"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
            </svg>
        );
    }
};

export default function Header({ configData }) {
    // Set text of name section in Header
    const myName = `${configData.name.first} ${configData.name.last}`;
    const [nameText, setNameText] = useState(myName);
    const handleNameMouseOver = () => setNameText(configData.jobTitle);
    const handleNameMouseOut = () => setNameText(myName);

    // Set dark mode context for app
    const [isDarkMode, setIsDarkMode] = useContext(DarkContext);
    function toggleDarkMode() {
        setIsDarkMode((prevState) => !prevState);
    }
    // Add dark mode class to the root HTML element
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

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
