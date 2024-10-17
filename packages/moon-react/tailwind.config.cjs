/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'background-primary': '#000000',
                'background-secondary': '#131313',
                'text-primary': '#ffffff',
                'text-secondary': '#ffffff59',
                'accent-color': '#5B22FF',
                'success-color': '#0ed145',
                'error-color': '#ff1744',
                'info-color': '#39a9db',
                'warning-color': '#ff9100',
            },

        },
    },
    plugins: [],
};