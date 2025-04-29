"use client";

import { useState, useEffect } from "react";

export default function RelativeTime({ date }: { date: string }) {
    const [label, setLabel] = useState("");

    useEffect(() => {
        const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
        const now = Date.now();
        const then = new Date(date).getTime();
        const diff = now - then;

        const units = [
            { limit: 60_000, name: "second", factor: 1_000 },
            { limit: 60 * 60_000, name: "minute", factor: 60_000 },
            { limit: 24 * 60_60_000, name: "hour", factor: 60 * 60_000 },
            {
                limit: 30 * 24 * 60_60_000,
                name: "day",
                factor: 24 * 60 * 60_000,
            },
            {
                limit: 12 * 30 * 24 * 60_60_000,
                name: "month",
                factor: 30 * 24 * 60 * 60_000,
            },
            {
                limit: Infinity,
                name: "year",
                factor: 12 * 30 * 24 * 60 * 60_000,
            },
        ] as const;

        for (const { limit, name, factor } of units) {
            if (diff < limit) {
                const n = Math.round(diff / factor);
                setLabel(rtf.format(-n, name as Intl.RelativeTimeFormatUnit));
                return;
            }
        }
    }, [date]);

    return <>{label}</>;
}
