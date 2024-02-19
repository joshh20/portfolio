import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export const DarkContext = createContext("");

export default function Layout() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <DarkContext.Provider value={[isDarkMode, setIsDarkMode]}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </DarkContext.Provider>
    );
}
