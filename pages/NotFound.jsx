import React from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function NotFound() {
    useDocumentTitle("Page not found");
    return (
        <div className="mx-4">
            <div className="mx-auto mt-4 max-w-xl rounded-lg bg-slate-50 p-4 text-center text-slate-800 drop-shadow-xl duration-500 dark:bg-slate-900 dark:text-slate-300 sm:mt-8 sm:p-8">
                <h1 className="mb-4 text-xl sm:mb-8 sm:text-3xl">
                    Sorry, the page you were looking for was not found.
                </h1>
                <Link to="/">
                    <button className="rounded-lg border-2 border-gray-300 bg-transparent px-2 py-1 ring-gray-300 hover:font-bold hover:ring-2 hover:ring-offset-2 dark:border-gray-700 dark:bg-transparent dark:ring-gray-200 dark:hover:ring-2 dark:hover:ring-offset-2 sm:text-lg">
                        Return Home
                    </button>
                </Link>
            </div>
        </div>
    );
}
