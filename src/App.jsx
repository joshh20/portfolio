import Hero from "./components/Hero";
import Header from "./components/Header";
import Test from "./components/Test";
import React, { useState } from "react";

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function toggleDarkMode() {
        setIsDarkMode((prevState) => !prevState);
    }

    // Add dark mode class to the root HTML element
    React.useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <div className="">
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <main>
                <Hero />
                {/* <Test /> */}
            </main>
        </div>
    );
}
