import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import ReCaptcha from "./molecules/ReCaptcha";
import { useOutletContext } from "react-router-dom";

export default function ContactForm() {
    const configData = useOutletContext();

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm();

    // State to track whether the submission to EmailJS ended with a status code of 200 meaning success
    const [didSubmissionSucceed, setDidSubmissionSucceed] = useState(null);
    // State to track ReCaptcha token
    const [captchaToken, setCaptchaToken] = useState(null);

    // Submit data from form to EmailJS
    const onSubmit = async (formData) => {
        try {
            // Await the promise from emailjs.send()
            const response = await emailjs.send(
                configData.plugins.emailjs.serviceId,
                configData.plugins.emailjs.templateId,
                {
                    ...formData,
                    "g-recaptcha-response": captchaToken,
                },
                configData.plugins.emailjs.options,
            );
            // Handle success
            setDidSubmissionSucceed(true);
            console.log("Email sent!", response.status, response.text);
        } catch (error) {
            // Handle failure
            setDidSubmissionSucceed(false);
            console.log("Email submission failed...", error);
        }
    };

    function formatInputElement(errors, registerName) {
        return `my-3 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 dark:border-gray-700 dark:bg-slate-800 dark:text-slate-300 dark:placeholder-slate-500 ${errors[registerName] ? "ring-1 ring-red-500 focus:ring-2 focus:ring-red-700 dark:focus:ring" : ""}`;
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-2xl rounded-lg bg-slate-300/20 p-4 shadow-lg transition duration-500 ease-in-out dark:bg-slate-900 sm:p-8"
        >
            {/* First name */}
            <input
                type="text"
                placeholder="First name"
                className={formatInputElement(errors, "firstName")}
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
                {errors.firstName?.message}
            </p>
            {/* Last name */}
            <input
                type="text"
                placeholder="Last name"
                className={formatInputElement(errors, "lastName")}
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
                {errors.lastName?.message}
            </p>
            {/* Email */}
            <input
                type="email"
                placeholder="Email"
                className={formatInputElement(errors, "email")}
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
                {errors.email?.message}
            </p>
            {/* Message */}
            <textarea
                rows={5}
                placeholder="Message"
                className={formatInputElement(errors, "message")}
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
                {errors.message?.message}
            </p>

            <ReCaptcha
                onChange={setCaptchaToken}
                setCaptchaToken={setCaptchaToken}
            />

            {/* Submit */}
            {/* This removes the submit button if we received a successful response from the backend */}
            {!didSubmissionSucceed && (
                <input
                    type="submit"
                    disabled={isSubmitting || !captchaToken}
                    className="mt-5 w-full cursor-pointer rounded-md bg-blue-700 px-4 py-2 font-medium text-white transition-all hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-700 dark:border-gray-700 dark:hover:ring-offset-2 sm:text-lg"
                />
            )}
            {/* Submission sucess message */}
            {didSubmissionSucceed === true && (
                <div className="mx-auto my-3 max-w-2xl rounded-lg bg-green-100 px-4 py-3 text-center font-medium text-green-800 shadow-sm dark:bg-slate-800 dark:text-green-500">
                    Your message has been sent successfully. I will do my best
                    to reply in a timely manner.
                </div>
            )}
            {/* Submission error message */}
            {didSubmissionSucceed === false && (
                <div className="mx-auto my-3 max-w-2xl rounded-lg bg-red-100 px-4 py-3 text-center font-medium text-red-600 shadow-sm dark:bg-slate-800">
                    Failed to send your message. Please try again later.
                </div>
            )}
        </form>
    );
}
