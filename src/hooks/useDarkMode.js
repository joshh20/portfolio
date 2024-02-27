import { useContext, useEffect } from "react";
import { DarkContext } from "../layouts/Layout";

export default function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useContext(DarkContext);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    function toggleDarkMode() {
        setIsDarkMode((prevState) => !prevState);
    }

    return [isDarkMode, toggleDarkMode];
}