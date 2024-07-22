"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Item {
    name: string;
    image: string;
    link: string;
    highlight: boolean;
    imageDark?: string | undefined;
}

export default function ImageDarkAware({
    item,
    className,
}: {
    item: Item;
    className?: string | undefined;
}) {
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
        <Image
            src={(resolvedTheme === "dark" && item.imageDark) || item.image}
            height={256}
            width={256}
            className={className}
            alt=""
            aria-label={item.name}
            loading="lazy"
        />
    );
}
