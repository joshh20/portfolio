import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import configData from "../assets/configData.json";

export const DarkContext = createContext("");

export default function Layout() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <DarkContext.Provider value={[isDarkMode, setIsDarkMode]}>
            <Header configData={configData} />
            <main>
                <Outlet context={configData} />
            </main>
            <Footer configData={configData} />
        </DarkContext.Provider>
    );
}
