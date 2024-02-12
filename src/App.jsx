import Navbar from "./components/Navbar";
import Test from "./components/Test";
import React, { useState } from "react";

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function toggleDarkMode() {
        setIsDarkMode((prevState) => !prevState);
    }

    return (
        <div className={`${isDarkMode ? "dark" : ""}`}>
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Test />
        </div>
    );
}
