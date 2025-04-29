import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import RelativeTimeWrapper from "@/components/atoms/RelativeTimeWrapper";

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join("posts"));
    return files.map((filename) => ({
        slug: filename.replace(".mdx", ""),
    }));
}

function getPost({ slug }: { slug: string }) {
    const markdownFile = fs.readFileSync(
        path.join("posts", slug + ".mdx"),
        "utf-8"
    );
    const { data: frontMatter, content } = matter(markdownFile);
    return { frontMatter, slug, content };
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const blog = getPost({ slug });

    return {
        title: blog.frontMatter.title,
        description: blog.frontMatter.description,
    };
}

export default async function Post({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const props = getPost({ slug });

    return (
        <div className="prose prose-base lg:prose-lg dark:prose-invert mx-auto bg-slate-200/10 dark:bg-slate-900 p-8 rounded-md shadow-md">
            <Link href="/blog" className="block mb-4">
                Go back
            </Link>
            <article>
                <h1>{props.frontMatter.title}</h1>
                <p className="pb-4 font-semibold">
                    Posted <RelativeTimeWrapper date={props.frontMatter.date} />
                </p>
                <MDXRemote source={props.content} />
            </article>
            <Link href="/blog" className="block mt-8">
                Go back
            </Link>
        </div>
    );
}
