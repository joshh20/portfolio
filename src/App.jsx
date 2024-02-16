import Hero from "./components/Hero";
import Header from "./components/Header";
import Test from "./components/Test";
import React, { createContext, useState } from "react";
import Links from "./components/Links";

export const DarkContext = createContext("");

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <DarkContext.Provider value={[isDarkMode, setIsDarkMode]}>
            <Header />
            <main>
                <Hero />
                {/* <Test /> */}
            </main>
        </DarkContext.Provider>
    );
}
