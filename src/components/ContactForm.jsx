import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_mvp2n1t", "template_exyd9lo", form.current, {
                publicKey: "M33VdhyGoy6FOroWy",
                blockHeadless: true,
                limitRate: {
                    throttle: 5000,
                },
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                },
            );
    };

    return (
        <div className="flex items-center justify-center">
            <form
                ref={form}
                onSubmit={sendEmail}
                className="w-full max-w-2xl rounded-lg bg-slate-200/10 p-8 shadow-lg transition duration-500 ease-in-out dark:bg-slate-900"
            >
                <div className="mb-6">
                    <label className="font-medium text-slate-800 dark:text-slate-300 sm:text-lg">
                        First Name
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 dark:border-gray-700 dark:bg-slate-800 dark:text-slate-300 dark:placeholder-gray-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="font-medium text-slate-800 dark:text-slate-300 sm:text-lg">
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 dark:border-gray-700 dark:bg-slate-800 dark:text-slate-300 dark:placeholder-gray-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="font-medium text-slate-800 dark:text-slate-300 sm:text-lg">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 dark:border-gray-700 dark:bg-slate-800 dark:text-slate-300 dark:placeholder-gray-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="font-medium text-slate-800 dark:text-slate-300 sm:text-lg">
                        Message
                    </label>
                    <textarea
                        name="message"
                        rows="4"
                        className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 dark:border-gray-700 dark:bg-slate-800 dark:text-slate-300 dark:placeholder-gray-500"
                    ></textarea>
                </div>
                <input
                    type="submit"
                    value="Send"
                    className="w-full cursor-pointer rounded-md bg-blue-700 px-4 py-2 font-medium text-white transition-all hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 dark:border-gray-700 dark:hover:ring-offset-2 sm:text-lg"
                />
            </form>
        </div>
    );
}
