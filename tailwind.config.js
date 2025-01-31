/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
        darkMode: false 
    },
    daisyui: {
        themes: ["light"], 
        darkTheme: "light"
    },
    plugins: [require("daisyui")],
};
