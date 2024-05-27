import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useOutletContext } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import PageHeader from "../components/atoms/PageHeader";

export default function Projects() {
    const configData = useOutletContext();
    useDocumentTitle(
        `${configData.name.first} ${configData.name.last} - ${configData.pages.projectsPage.header}`,
    );
    return (
        <>
            <PageHeader title={configData.pages.projectsPage.header} />
            <ProjectCard />
        </>
    );
}
