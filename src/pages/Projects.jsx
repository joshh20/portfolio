import React, { useEffect } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useOutletContext } from "react-router-dom";

export default function Projects() {
    const configData = useOutletContext();
    useDocumentTitle(
        `${configData.name.first} ${configData.name.last} - Projects`,
    );
    return <h2>I'm projects</h2>;
}
