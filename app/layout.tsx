import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { clsx } from "clsx";
import { configData } from "@/assets/configData";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/atoms/ScrollToTopButton";

const nunito = Nunito({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: `${configData.name.first} ${configData.name.last} - %s`,
        default: `${configData.name.first} ${configData.name.last} - ${configData.jobTitle}`,
    },
    description: configData.metadata.description,
    authors: [{ name: `${configData.name.first} ${configData.name.last}` }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={clsx(
                "bg-slate-100 dark:bg-slate-900 dark:text-white max-w-3xl mx-auto py-20 px-4",
                nunito.className
            )}
        >
            <Header />
            <body className="mx-4 max-w-4xl py-8 sm:mx-12 sm:mt-8 lg:mx-auto">
                {children}
            </body>
            <Footer configData={configData} />
            <ScrollToTopButton />
        </html>
    );
}
