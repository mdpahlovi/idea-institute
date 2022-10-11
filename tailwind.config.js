/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            xs: "448px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            xxl: "1600px",
        },
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
        },
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
                    neutral: "#131517",
                    "neutral-content": "#ffffff",
                    primary: "#F7931E",
                    secondary: "#143852",
                },
                dark: {
                    ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
                    "base-100": "#131517",
                    "base-content": "#ffffff",
                    neutral: "#ffffff",
                    "neutral-content": "#131517",
                    primary: "#F7931E",
                    secondary: "#143852",
                },
            },
            "light",
            "dark",
        ],
    },
};
