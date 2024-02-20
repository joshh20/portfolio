import Hero from "../components/Hero";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Tools from "../components/Tools";
import { useOutletContext } from "react-router-dom";

export default function Home() {
    const configData = useOutletContext();
    useDocumentTitle(
        `${configData.name.first} ${configData.name.last} - ${configData.jobTitle}`,
    );
    return (
        <>
            <Hero />
            <Tools />
        </>
    );
}
