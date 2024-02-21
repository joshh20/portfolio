import React, { useEffect } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useOutletContext } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
    const configData = useOutletContext();
    useDocumentTitle(
        `${configData.name.first} ${configData.name.last} - Projects`,
    );
    return (
        <>
            <ProjectCard />
        </>
    );
}
