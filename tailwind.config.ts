import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "my-blue": "rgba(var(--my-blue) / <alpha-value>)",
                "dark-acc": "rgba(var(--dark-acc) / <alpha-value>)",
                "light-acc": "rgba(var(--light-acc) / <alpha-value>)",
                foreground: "rgba(var(--foreground-rgb) / <alpha-value>)",
                "background-start":
                    "rgba(var(--background-start-rgb) / <alpha-value>)",
                "background-end":
                    "rgba(var(--background-end-rgb) / <alpha-value>)",
            },
        },
    },
    plugins: [],
};
export default config;
