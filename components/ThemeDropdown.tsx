"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import ThemeIcon from "@/components/atoms/ThemeIcon";

type Theme = string | undefined;

export default function ThemeDropdown({
    theme,
    resolvedTheme,
    setTheme,
}: {
    theme: Theme;
    resolvedTheme: Theme;
    setTheme: Dispatch<SetStateAction<string>>;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);
    function handleSelection(theme: string) {
        setIsOpen(false);
        setTheme(theme);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="p-2 bg-slate-50 text-slate-500 dark:bg-slate-900 dark:text-slate-400 rounded-full"
            >
                <ThemeIcon resolvedTheme={resolvedTheme} />
            </button>
            {isOpen && (
                <div className="absolute top-16 -left-[5rem] sm:-left-10 py-2 w-32 rounded-md shadow-xl bg-slate-50 text-slate-500 dark:bg-slate-900 dark:text-slate-400 outline outline-1 outline-gray-300 dark:outline-gray-700 z-10">
                    <button
                        onClick={() => handleSelection("light")}
                        className="block w-full px-4 py-2 text-sm hover:bg-slate-200 hover:dark:bg-slate-800 cursor-pointer"
                    >
                        Light theme
                    </button>
                    <button
                        onClick={() => handleSelection("dark")}
                        className="block w-full px-4 py-2 text-sm hover:bg-slate-200 hover:dark:bg-slate-800 cursor-pointer"
                    >
                        Dark theme
                    </button>
                    <button
                        onClick={() => handleSelection("system")}
                        className="block w-full px-4 py-2 text-sm hover:bg-slate-200 hover:dark:bg-slate-800 cursor-pointer"
                    >
                        System theme
                    </button>
                </div>
            )}
        </div>
    );
}
