import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import getRelativeTime from "@/utils/getRelativeTime";
import PageHeader from "@/components/atoms/PageHeader";
import { configData } from "@/assets/configData";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
};

export default function Home() {
    // 1) Set blogs directory
    const blogDir = "posts";

    // 2) Find all files in the blog directory
    const files = fs.readdirSync(path.join(blogDir));

    // 3) For each blog found
    const blogs = files.map((filename) => {
        // 4) Read the content of that blog
        const fileContent = fs.readFileSync(
            path.join(blogDir, filename),
            "utf-8"
        );

        // 5) Extract the metadata from the blog's content
        const { data: frontMatter } = matter(fileContent);

        // 6) Return the metadata and page slug
        return {
            meta: frontMatter,
            slug: filename.replace(".mdx", ""),
        };
    });

    blogs.sort((a, b) => {
        const dateA = new Date(a.meta.date).getTime();
        const dateB = new Date(b.meta.date).getTime();
        return dateB - dateA;
    });

    return (
        <main className="flex flex-col">
            <PageHeader title={configData.pages.blogPage.header} />
            <section>
                <div className="bg-slate-200/10 p-8 rounded-md shadow-md">
                    {blogs.map((blog) => (
                        <Link
                            href={"/blog/" + blog.slug}
                            passHref
                            key={blog.slug}
                        >
                            <article className="py-2 flex justify-between align-middle gap-2">
                                <div>
                                    <h3 className="text-lg font-bold">
                                        {blog.meta.title}
                                    </h3>
                                    <p className="text-slate-800 dark:text-slate-400">
                                        {blog.meta.description}
                                    </p>
                                </div>
                                <div className="my-auto text-slate-800 dark:text-slate-400">
                                    <p>{getRelativeTime(blog.meta.date)}</p>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
