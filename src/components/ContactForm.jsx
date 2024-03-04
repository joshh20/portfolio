import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);

    function formatErrors(errorMessage) {
        return (
            <p
                role="alert"
                className="font-semibold text-red-500 dark:font-normal"
            >
                {errorMessage}
            </p>
        );
    }

    return (
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
                        ? "border border-red-500 focus:border-red-700 dark:border-red-500 dark:focus:border-red-700"
                        : ""
                }`}
                {...register("firstName", {
                    required: true,
                    maxLength: 80,
                })}
                aria-invalid={errors.firstName ? "true" : "false"}
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
                        ? "border border-red-500 focus:border-red-700 dark:border-red-500 dark:focus:border-red-700"
                        : ""
                }`}
                {...register("lastName", {
                    required: true,
                    maxLength: 80,
                })}
                aria-invalid={errors.lastName ? "true" : "false"}
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
                        ? "border border-red-500 focus:border-red-700 dark:border-red-500 dark:focus:border-red-700"
                        : ""
                }`}
                {...register("email", {
                    required: true,
                    pattern:
                        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
                })}
                aria-invalid={errors.email ? "true" : "false"}
            />
            {/* Email error messages */}
            {errors.email?.type === "required" &&
                formatErrors("Please enter your email address")}
            {errors.email?.type === "pattern" &&
                formatErrors("Please make sure to enter a valid email address")}
            {/* Message */}
            <textarea
                {...register("message", {
                    required: true,
                })}
                rows={5}
                placeholder="Message"
                className={`my-3 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 dark:border-gray-700 dark:bg-slate-800 dark:text-slate-300 dark:placeholder-slate-500 ${
                    errors.message
                        ? "border border-red-500 focus:border-red-700 dark:border-red-500 dark:focus:border-red-700"
                        : ""
                }`}
                aria-invalid={errors.message ? "true" : "false"}
            />
            {/* Message box error messages */}
            {errors.message?.type === "required" &&
                formatErrors("Please share your thoughts 😁")}
            {/* Submit */}
            <input
                type="submit"
                className="mt-5 w-full cursor-pointer rounded-md bg-blue-700 px-4 py-2 font-medium text-white transition-all hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 dark:border-gray-700 dark:hover:ring-offset-2 sm:text-lg"
            />
        </form>
    );
}
