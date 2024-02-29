import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import subscribe from "subscribe-event";

export default function ScrollToTopButton() {
    // Code to only show button if user has scrolled a certain amount from the top. Uses debouncing.
    const [scrollPosition, setScrollPosition] = useState(window.scrollY);

    const debouncedScroll = useDebouncedCallback(() => {
        setScrollPosition(window.scrollY);
    }, 200);

    useEffect(() => {
        const unsubscribe = subscribe(window, "scroll", debouncedScroll);
        return () => {
            unsubscribe();
        };
    });

    return (
        <button
            className={`fixed bottom-10 right-10 flex items-center justify-center rounded-full bg-gray-500/40 p-4 text-slate-50 shadow-md ring-gray-600/60 hover:ring-2 active:scale-110 dark:border-gray-700 dark:bg-slate-900/70 dark:ring-2 dark:ring-slate-300 dark:hover:ring-offset-2 dark:active:scale-110 ${scrollPosition >= 300 ? "" : "hidden"}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top of page"
        >
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="h-4 w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
            >
                <path
                    fill="currentColor"
                    d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                ></path>
            </svg>
        </button>
    );
}
