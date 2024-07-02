import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import getRelativeTime from "@/utils/getRelativeTime";
import Link from "next/link";

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join("posts"));

    const paths = files.map((filename) => ({
        slug: filename.replace(".mdx", ""),
    }));

    return paths;
}

function getPost({ slug }: { slug: string }) {
    const markdownFile = fs.readFileSync(
        path.join("posts", slug + ".mdx"),
        "utf-8"
    );

    const { data: frontMatter, content } = matter(markdownFile);

    return {
        frontMatter,
        slug,
        content,
    };
}

export async function generateMetadata({ params }: any) {
    const blog = getPost(params);

    return {
        title: blog.frontMatter.title,
        description: blog.frontMatter.description,
    };
}

export default function Post({ params }: any) {
    const props = getPost(params);

    return (
        <div className="prose prose-base lg:prose-lg dark:prose-invert mx-auto bg-slate-200/20 dark:bg-slate-900 p-8 rounded-md shadow-md">
            <Link href="/blog" className="block mb-4">
                Go back
            </Link>
            <article>
                <h1>{props.frontMatter.title}</h1>
                <p className="pb-4 font-semibold">
                    Posted {getRelativeTime(props.frontMatter.date)}
                </p>

                <MDXRemote source={props.content} />
            </article>
            <Link href="/blog" className="block mt-8">
                Go back
            </Link>
        </div>
    );
}
