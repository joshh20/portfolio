"use client";

import clsx from "clsx";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { configData } from "@/assets/configData";

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, errors },
    } = useForm<FormValues>();

    const [didSubmissionSucceed, setDidSubmissionSucceed] =
        useState<Boolean | null>(null);

    async function onSubmit(formObject: FormValues) {
        setDidSubmissionSucceed(null);
        try {
            // Await the promise from emailjs.send()
            const response = await emailjs.send(
                configData.plugins.emailjs.serviceId,
                configData.plugins.emailjs.templateId,
                { ...formObject },
                configData.plugins.emailjs.options
            );
            setDidSubmissionSucceed(true);
            console.log("Email sent!", response.status, response.text);
            // Reset form to empty values
            reset();
        } catch (error) {
            setDidSubmissionSucceed(false);
            console.log("Email submission failed...", error);
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-2xl rounded-lg bg-slate-300/20 p-4 shadow-md transition duration-500 ease-in-out dark:bg-slate-900 sm:p-8"
        >
            {/* First name */}
            <input
                type="text"
                placeholder="First name"
                // className={formatInputElement(errors, "firstName")}
                className={clsx(
                    "my-3 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 dark:focus:ring-1 dark:focus:ring-gray-500 dark:border-gray-700 dark:bg-slate-800 dark:text-slate-300 dark:placeholder-slate-500",
                    {
                        "ring-1 ring-red-500 focus:ring-2 focus:ring-red-700 dark:focus:ring-red-700 dark:focus:ring-[3px]":
                            errors.firstName,
                    }
                )}
                aria-invalid={errors.firstName ? "true" : "false"}
                aria-label="First name"
                {...register("firstName", {
                    required: "First name is required",
                    maxLength: {
                        value: 60,
                        message: "Please don't exceed 60 characters",
                    },
                })}
            />
            {/* First name error messages */}
            <p role="alert" className="font-semibold text-red-700">
                {typeof errors.firstName?.message === "string"
                    ? errors.firstName?.message
                    : null}
            </p>
            {/* Last name */}
            <input
                type="text"
                placeholder="Last name"
                className={clsx(
                    "my-3 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 dark:focus:ring-1 dark:focus:ring-gray-500 dark:border-gray-700 dark:bg-slate-800 dark:text-slate-300 dark:placeholder-slate-500",
                    {
                        "ring-1 ring-red-500 focus:ring-2 focus:ring-red-700 dark:focus:ring-red-700 dark:focus:ring-[3px]":
                            errors.lastName,
                    }
                )}
                aria-invalid={errors.lastName ? "true" : "false"}
                aria-label="Last name"
                {...register("lastName", {
                    required: "Last name is required",
                    maxLength: {
                        value: 60,
                        message: "Please don't exceed 60 characters",
                    },
                })}
            />
            {/* Last name error messages */}
            <p role="alert" className="font-semibold text-red-700">
                {typeof errors.lastName?.message === "string"
                    ? errors.lastName?.message
                    : null}
            </p>
            {/* Email */}
            <input
                type="email"
                placeholder="Email"
                className={clsx(
                    "my-3 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 dark:focus:ring-1 dark:focus:ring-gray-500 dark:border-gray-700 dark:bg-slate-800 dark:text-slate-300 dark:placeholder-slate-500",
                    {
                        "ring-1 ring-red-500 focus:ring-2 focus:ring-red-700 dark:focus:ring-red-700 dark:focus:ring-[3px]":
                            errors.email,
                    }
                )}
                aria-invalid={errors.email ? "true" : "false"}
                aria-label="Email"
                {...register("email", {
                    required: "Please enter your email address",
                    pattern: {
                        value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
                        message: "Please enter a valid email address",
                    },
                })}
            />
            {/* Email error messages */}
            <p role="alert" className="font-semibold text-red-700">
                {typeof errors.email?.message === "string"
                    ? errors.email?.message
                    : null}
            </p>
            {/* Message */}
            <textarea
                rows={8}
                placeholder="Message"
                className={clsx(
                    "my-3 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 dark:focus:ring-1 dark:focus:ring-gray-500 dark:border-gray-700 dark:bg-slate-800 dark:text-slate-300 dark:placeholder-slate-500",
                    {
                        "ring-1 ring-red-500 focus:ring-2 focus:ring-red-700 dark:focus:ring-red-700 dark:focus:ring-[3px]":
                            errors.message,
                    }
                )}
                aria-invalid={errors.message ? "true" : "false"}
                aria-label="Message"
                {...register("message", {
                    required: "Please share your thoughts 😁",
                    maxLength: {
                        value: 5000,
                        message: "Please keep it under 5,000 characters",
                    },
                })}
            />
            {/* Message box error messages */}
            <p role="alert" className="font-semibold text-red-700">
                {typeof errors.message?.message === "string"
                    ? errors.message?.message
                    : null}
            </p>

            {/* Submit */}
            {/* This removes the submit button if we received a successful response from the backend */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="mt-5 w-full cursor-pointer rounded-md bg-blue-700
                px-4 py-2 font-medium text-white transition-all
                hover:bg-blue-800 focus:outline-none focus:ring-2
                focus:ring-blue-700 focus:ring-offset-2
                disabled:cursor-not-allowed disabled:bg-gray-700
                dark:border-gray-700 dark:hover:ring-offset-2 sm:text-lg flex justify-center items-center gap-2"
            >
                <svg
                    className={clsx(
                        "size-6",
                        { hidden: !isSubmitting },
                        {
                            "animate-spin inline-block": isSubmitting,
                        }
                    )}
                    fill="none"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75C2.33579 10.75 2 10.4142 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C9.58579 18 9.25 17.6642 9.25 17.25C9.25 16.8358 9.58579 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5Z"
                        fill="white"
                    />
                </svg>
                <span>Submit</span>
            </button>

            {/* Submission sucess message */}
            {didSubmissionSucceed === true && (
                <div className="my-3 max-w-2xl rounded-md bg-green-100 px-4 py-3 text-center font-medium text-green-800 shadow-sm dark:bg-slate-800 dark:text-green-500">
                    Your message has been sent successfully. I will do my best
                    to reply in a timely manner.
                </div>
            )}
            {/* Submission error message */}
            {didSubmissionSucceed === false && (
                <div className="my-3 max-w-2xl rounded-md bg-red-100 px-4 py-3 text-center font-medium text-red-600 shadow-sm dark:bg-slate-800">
                    Failed to send your message. Please try again later.
                </div>
            )}
        </form>
    );
}
