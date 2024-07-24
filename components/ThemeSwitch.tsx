"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ThemeDropdown from "@/components/ThemeDropdown";
import Skeleton from "@/components/atoms/Skeleton";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { theme, resolvedTheme, setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <Skeleton className="size-12" />;
    }

    return (
        <ThemeDropdown
            theme={theme}
            resolvedTheme={resolvedTheme}
            setTheme={setTheme}
        />
    );
}
