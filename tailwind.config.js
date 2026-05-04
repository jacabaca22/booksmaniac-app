/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./main.jsx",
        "./App.jsx",
        "./components/**/*.jsx",
    ],
    theme: {
        extend: {
            colors: {
                darkBg: '#14181c',
                cardBg: '#2c3440',
                accentGreen: '#00b020',
            }
        },
    },
    plugins: [],
}   