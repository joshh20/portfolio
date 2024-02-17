import Hero from "./components/Hero";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Test from "./pages/Test";
import NotFound from "./pages/NotFound";
import React, { createContext, useState } from "react";
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="test" element={<Test />} />
            <Route path="*" element={<NotFound />} />
        </Route>,
    ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
