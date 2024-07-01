/* eslint-disable @next/next/no-img-element */

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
                <div className="absolute top-14 py-2 w-32 rounded-md shadow-xl bg-slate-50 text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                    <option
                        onClick={() => setTheme("light")}
                        className="block px-4 py-2 text-sm hover:bg-slate-200 hover:dark:bg-slate-800 cursor-pointer"
                    >
                        Light theme
                    </option>
                    <option
                        onClick={() => setTheme("dark")}
                        className="block px-4 py-2 text-sm hover:bg-slate-200 hover:dark:bg-slate-800 cursor-pointer"
                    >
                        Dark theme
                    </option>
                    <option
                        onClick={() => setTheme("system")}
                        className="block px-4 py-2 text-sm hover:bg-slate-200 hover:dark:bg-slate-800 cursor-pointer"
                    >
                        System theme
                    </option>
                </div>
            )}
        </div>
    );
}
