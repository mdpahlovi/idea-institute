/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],

    // DaisyUI Customized
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/colors/themes")["[data-theme=light]"],
                    "base-100": "#ffffff",
                    "base-content": "#131517",
                    neutral: "#143852",
                    "neutral-content": "#ffffff",
                    primary: "#F7931E",
                },
                dark: {
                    ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
                    "base-100": "#131517",
                    "base-content": "#ffffff",
                    neutral: "#ffffff",
                    "neutral-content": "#131517",
                    primary: "#F7931E",
                },
            },
            "light",
            "dark",
        ],
    },
};
