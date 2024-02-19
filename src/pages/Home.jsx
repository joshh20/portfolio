import Hero from "../components/Hero";
import { useEffect } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Tools from "../components/Tools";

export default function Home() {
    useDocumentTitle("Josh Hittie - Web Developer");
    return (
        <>
            <Hero />
            <Tools />
        </>
    );
}
