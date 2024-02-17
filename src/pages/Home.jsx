import Hero from "../components/Hero";
import { useEffect } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Home() {
    useDocumentTitle("Josh Hittie - Web Developer");
    return <Hero />;
}
