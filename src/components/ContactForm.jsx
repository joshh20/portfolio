import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // State to track whether the submission to EmailJS ended with a status code of 200 meaning success
    const [didSubmissionSucceed, setDidSubmissionSucceed] = useState(null);

    // Submit data from form to EmailJS
    const onSubmit = (formData) => {
        emailjs
            .send("service_mvp2n1t", "template_exyd9lo", formData, {
                publicKey: "M33VdhyGoy6FOroWy",
                blockHeadless: true,
                limitRate: {
                    throttle: 5000,
                },
            })
            .then(
                (response) => {
                    setDidSubmissionSucceed(true);
                    console.log("Email sent!", response.status, response.text);
                },
                (error) => {
                    setDidSubmissionSucceed(false);
                    console.log("Email submission failed...", error);
                },
            );
    };

    // Return JSX with formatted error message
    function formatErrors(errorMessage) {
        return (
            <p role="alert" className="font-semibold text-red-700">
                {errorMessage}
            </p>
        );
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto max-w-2xl rounded-lg bg-slate-300/20 p-8 shadow-lg transition duration-500 ease-in-out dark:bg-slate-900"
            >
                {/* First name */}
                <input
                    type="text"
                    placeholder="First name"
                    className={`my-3 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 dark:border-gray-700 dark:bg-slate-800 dark:text-slate-300 dark:placeholder-slate-500 ${
                        errors.firstName
                            ? "ring-1 ring-red-500 focus:ring-2 focus:ring-red-700 dark:focus:ring"
                            : ""
                    }`}
                    {...register("firstName", {
                        required: true,
                        maxLength: 80,
                    })}
                    aria-invalid={errors.firstName ? "true" : "false"}
                    aria-label="First name"
                />
                {/* First name error messages */}
                {errors.firstName?.type === "required" &&
                    formatErrors("First name is required")}
                {errors.firstName?.type === "maxLength" &&
                    formatErrors("Please don't exceed 80 characters")}
                {/* Last name */}
                <input
                    type="text"
                    placeholder="Last name"
                    className={`my-3 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 dark:border-gray-700 dark:bg-slate-800 dark:text-slate-300 dark:placeholder-slate-500 ${
                        errors.lastName
                            ? "ring-1 ring-red-500 focus:ring-2 focus:ring-red-700 dark:focus:ring"
                            : ""
                    }`}
                    {...register("lastName", {
                        required: true,
                        maxLength: 80,
                    })}
                    aria-invalid={errors.lastName ? "true" : "false"}
                    aria-label="Last name"
                />
                {/* Last name error messages */}
                {errors.lastName?.type === "required" &&
                    formatErrors("Last name is required")}
                {errors.lastName?.type === "maxLength" &&
                    formatErrors("Please don't exceed 80 characters")}
                {/* Email */}
                <input
                    type="email"
                    placeholder="Email"
                    className={`my-3 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 dark:border-gray-700 dark:bg-slate-800 dark:text-slate-300 dark:placeholder-slate-500 ${
                        errors.email
                            ? "ring-1 ring-red-500 focus:ring-2 focus:ring-red-700 dark:focus:ring"
                            : ""
                    }`}
                    {...register("email", {
                        required: true,
                        pattern:
                            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-label="Email"
                />
                {/* Email error messages */}
                {errors.email?.type === "required" &&
                    formatErrors("Please enter your email address")}
                {errors.email?.type === "pattern" &&
                    formatErrors(
                        "Please make sure to enter a valid email address",
                    )}
                {/* Message */}
                <textarea
                    {...register("message", {
                        required: true,
                    })}
                    rows={5}
                    placeholder="Message"
                    className={`my-3 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 dark:border-gray-700 dark:bg-slate-800 dark:text-slate-300 dark:placeholder-slate-500 ${
                        errors.message
                            ? "ring-1 ring-red-500 focus:ring-2 focus:ring-red-700 dark:focus:ring"
                            : ""
                    }`}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-label="Message"
                />
                {/* Message box error messages */}
                {errors.message?.type === "required" &&
                    formatErrors("Please share your thoughts 😁")}

                {/* Submission sucess message */}
                {didSubmissionSucceed === true && (
                    <div className="mx-auto my-3 max-w-2xl rounded-lg bg-green-100 px-4 py-3 text-center font-medium text-green-800 shadow-sm dark:bg-slate-800 dark:text-green-500">
                        Your message has been sent successfully. I will do my
                        best to reply in a timely manner.
                    </div>
                )}
                {/* Submission error message */}
                {didSubmissionSucceed === false && (
                    <div className="mx-auto my-3 max-w-2xl rounded-lg bg-red-100 px-4 py-3 text-center font-medium text-red-600 shadow-sm dark:bg-slate-800">
                        Failed to send your message. Please try again later.
                    </div>
                )}

                {/* Submit */}
                {/* This removes the submit button if we received a successful response from the backend */}
                {!didSubmissionSucceed && (
                    <input
                        type="submit"
                        className="mt-5 w-full cursor-pointer rounded-md bg-blue-700 px-4 py-2 font-medium text-white transition-all hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 dark:border-gray-700 dark:hover:ring-offset-2 sm:text-lg"
                    />
                )}
            </form>
        </>
    );
}
