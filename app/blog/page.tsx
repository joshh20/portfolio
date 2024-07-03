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
        <main className="">
            <PageHeader title={configData.pages.blogPage.header} />
            <section>
                <div className="bg-slate-200/10 dark:bg-slate-900 p-8 rounded-md shadow-md">
                    {blogs.map((blog) => (
                        <div key={blog.slug} className="mb-8 last:mb-0">
                            <Link href={"/blog/" + blog.slug} passHref>
                                <article className="py-2 grid sm:grid-cols-6 text-slate-800 dark:text-slate-300">
                                    <div className="col-span-4">
                                        <h3 className="text-xl font-bold mb-2">
                                            {blog.meta.title}
                                        </h3>
                                        <h4 className="font-bold sm:hidden mb-1">
                                            Posted{" "}
                                            {getRelativeTime(blog.meta.date)}
                                        </h4>
                                        <p>{blog.meta.description}</p>
                                    </div>
                                    <div className="col-span-2 font-bold justify-self-end hidden sm:inline-block">
                                        <p>{getRelativeTime(blog.meta.date)}</p>
                                    </div>
                                </article>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
