import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useOutletContext } from "react-router-dom";
import ContactForm from "../components/ContactForm";

export default function Projects() {
    const configData = useOutletContext();
    useDocumentTitle(
        `${configData.name.first} ${configData.name.last} - Contact`,
    );
    return (
        <>
            <ContactForm />
        </>
    );
}
