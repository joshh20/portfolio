"use client";

import { configData } from "@/assets/configData";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import ImageDarkAware from "./ImageDarkAware";

export default function Tools() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // This is necessary to avoid hydration mismatch errors
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <section>
            <div className="mt-6 rounded-md bg-slate-200/10 p-8 text-slate-800 shadow-md dark:bg-slate-900 dark:text-slate-300 sm:mt-12">
                <h2 className="mb-8 text-center text-2xl font-semibold text-slate-800 dark:text-slate-300">
                    Some languages and tools that I use
                </h2>
                <div className="mx-auto flex flex-wrap place-content-around gap-x-12 gap-y-8 font-semibold">
                    {configData.technologies
                        .filter((item) => item.highlight)
                        .map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center duration-200 hover:scale-125"
                            >
                                <ImageDarkAware
                                    item={item}
                                    className="size-16 sm:size-24"
                                />
                                <h3 className="mt-4">{item.name}</h3>
                            </Link>
                        ))}
                </div>
            </div>
        </section>
    );
}
