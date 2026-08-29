const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}", "./app/**/*.{js,jsx}"],
    theme: {
        screens: {
            xs: "26.25rem",
            ...defaultTheme.screens,
        },
        extend: {
            fontFamily: {
                sans: ["IRANSansX", "Tahoma", "sans-serif"],
                iransans: ["IRANSansX", "sans-serif"],
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

                purple: "#4F215A",

                ink: "#292827",
                "ink-dark": "#1F1E1D",
                "ink-darker": "#0E0E0E",
                "ink-faq": "#3d3b3a",
                "ink-soft": "#333230",
                "bg-mint": "#f2faf9",
                "bg-blush": "#fefafb",
                "bg-lavender": "#f4f5fb",
                "bg-neutral": "#f6f6f6",
            },
            borderRadius: {
                "pill-sm": "0.1875rem",
                "pill-md": "0.5rem",
                "pill-lg": "0.625rem",
                badge: "0.475rem",
                chip: "0.51875rem",
                "card-sm": "0.8375rem",
                "card-lg": "2.5625rem",
                navbar: "1.375rem",
            },
            fontSize: {
                "2xs": "0.81875rem",
                xs2: "0.89375rem",
                base2: "0.9375rem",
                "sm-alt": "0.9875rem",
                md2: "1rem",
                lg2: "1.09375rem",
                xl2: "1.275rem",
                "2xl2": "2rem",
                "3xl2": "2.6875rem",
                "4xl2": "3.325rem",
                "5xl2": "3.7125rem",
                "6xl2": "4.40625rem",
            },
            maxWidth: {
                content: "75rem",
            },
            boxShadow: {
                soft: "0 1.25rem 3.75rem -1.25rem rgba(33,41,90,0.25)",
            },
        },
    },
    plugins: [],
};
