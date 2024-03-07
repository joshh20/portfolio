import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useOutletContext } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import PageHeader from "../components/atoms/PageHeader";

export default function Contact() {
    const configData = useOutletContext();
    useDocumentTitle(
        `${configData.name.first} ${configData.name.last} - Contact`,
    );
    return (
        <div className="mx-auto max-w-2xl">
            <PageHeader title={"Contact"} />
            <ContactForm />
        </div>
    );
}
