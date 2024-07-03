"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ThemeDropdown from "@/components/ThemeDropdown";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { theme, resolvedTheme, setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <ThemeDropdown
            theme={theme}
            resolvedTheme={resolvedTheme}
            setTheme={setTheme}
        />
    );
}
