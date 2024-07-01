"use client";

import { configData } from "@/assets/configData";
import { useTheme } from "next-themes";

export default function Links() {
    const { resolvedTheme } = useTheme();

    let iconFillColor;
    switch (resolvedTheme) {
        case "light":
            iconFillColor = "#1e293b";
            break;
        case "dark":
            iconFillColor = "#fff";
            break;
        default:
            iconFillColor = "#1e293b";
    }

    return (
        <ul className="flex flex-wrap justify-center gap-4 md:justify-end">
            <li className="text-2xl opacity-70 transition hover:opacity-100">
                <a
                    href={configData.links.GitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                        width="1em"
                        height="1em"
                        focusable="false"
                        aria-hidden="true"
                    >
                        <path
                            fill={iconFillColor}
                            d="M32 1.8c-17 0-31 13.8-31 31C1 46.4 9.9 58 22.3 62.2c1.6.3 2.1-.7 2.1-1.4s0-2.7-.1-5.4c-8.6 2-10.4-4.2-10.4-4.2-1.4-3.5-3.5-4.5-3.5-4.5-2.8-2 .1-2 .1-2 3.1.1 4.8 3.2 4.8 3.2 2.7 4.8 7.3 3.4 9 2.5.3-2 1.1-3.4 2-4.2-6.8-.7-14.1-3.4-14.1-15.2 0-3.4 1.3-6.1 3.2-8.2-.3-.7-1.4-3.9.3-8.2 0 0 2.7-.8 8.6 3.2 2.5-.7 5.1-1.1 7.8-1.1s5.4.3 7.8 1.1c5.9-3.9 8.5-3.2 8.5-3.2 1.7 4.2.7 7.5.3 8.2 2 2.1 3.2 4.9 3.2 8.2 0 11.8-7.3 14.5-14.1 15.2 1.1 1 2.1 3 2.1 5.8 0 4.2-.1 7.5-.1 8.5 0 .8.6 1.7 2.1 1.4C54.1 57.8 63 46.3 63 32.6c-.1-17-14-30.8-31-30.8z"
                        ></path>
                    </svg>
                </a>
            </li>
            <li className="text-2xl opacity-70 transition hover:opacity-100">
                <a
                    href={configData.links.LinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                >
                    <svg
                        viewBox="0 0 64 64"
                        width="1em"
                        height="1em"
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill={iconFillColor}
                            d="M58.5 1H5.6C3.1 1 1.1 3 1.1 5.5v53c0 2.4 2 4.5 4.5 4.5h52.7c2.5 0 4.5-2 4.5-4.5V5.4C63 3 61 1 58.5 1zM19.4 53.7h-9.1V24.2h9.1v29.5zm-4.6-33.6c-3 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.2 5.3-5.3 5.3zm39.1 33.6h-9.1V39.4c0-3.4-.1-7.9-4.8-7.9-4.8 0-5.5 3.8-5.5 7.6v14.6h-9.1V24.2h8.9v4.1h.1c1.3-2.4 4.2-4.8 8.7-4.8 9.3 0 11 6 11 14.2v16h-.2z"
                        ></path>
                    </svg>
                </a>
            </li>
            <li className="text-2xl opacity-70 transition hover:opacity-100">
                <a
                    href={configData.links.Twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 300 271"
                        width="1em"
                        height="1em"
                        focusable="false"
                        aria-hidden="true"
                    >
                        <path
                            fill={iconFillColor}
                            d="M236 0h46L181 115l118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123L-1.1 0h94.9l65.5 86.6zm-16.1 244h25.5L80.4 26H53z"
                        ></path>
                    </svg>
                </a>
            </li>
        </ul>
    );
}
