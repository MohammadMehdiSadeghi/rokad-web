import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        screens: {
            xs: "420px",
            ...defaultTheme.screens,
        },
        extend: {
            fontFamily: {
                sans: ["IRANSansX", "Tahoma", "sans-serif"],
            },
            colors: {
                navy: "#21295a",
                "navy-alt": "#202a5a",
                teal: "#58bdaf",
                "teal-alt": "#59bbaf",
                "teal-text": "#347e75",
                "teal-text-alt": "#2e7068",
                "teal-wordmark": "#4bb5a8",
                magenta: "#e0195b",
                "magenta-text": "#ce1754",
                orange: "#f4971f",
                "orange-alt": "#f9a21d",
                ink: "#292827",
                "bg-mint": "#f2faf9",
                "bg-blush": "#fefafb",
                "bg-lavender": "#f4f5fb",
                "bg-neutral": "#f6f6f6",
            },
            borderRadius: {
                "pill-sm": "3px",
                "pill-md": "8px",
                "pill-lg": "10px",
                badge: "7.6px",
                chip: "8.3px",
                "card-sm": "13.4px",
                "card-lg": "41px",
                navbar: "22px",
            },
            fontSize: {
                "2xs": "13.1px",
                xs2: "14.3px",
                base2: "15px",
                "sm-alt": "15.8px",
                md2: "16px",
                lg2: "17.5px",
                xl2: "20.4px",
                "2xl2": "32px",
                "3xl2": "43px",
                "4xl2": "53.2px",
                "5xl2": "59.4px",
                "6xl2": "70.5px",
            },
            maxWidth: {
                content: "1200px",
            },
            boxShadow: {
                soft: "0 20px 60px -20px rgba(33,41,90,0.25)",
            },
        },
    },
    plugins: [],
};