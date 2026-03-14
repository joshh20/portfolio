import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)"],
      },
      animation: {
        text: "text 5s ease infinite",
        background: "text 15s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "text-slate-800",
            "--tw-prose-counters": "text-slate-800",
            "--tw-prose-bullets": "text-slate-800",
          },
        },
      },
    },
  },
  plugins: [typography],
};
export default config;
