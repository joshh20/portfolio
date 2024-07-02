import { configData } from "@/assets/configData";
import ProjectCard from "@/components/ProjectCard";
import PageHeader from "@/components/atoms/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
};

export default function Projects() {
    return (
        <>
            <PageHeader title={configData.pages.projectsPage.header} />
            <ProjectCard />
        </>
    );
}
