import type { Config } from "tailwindcss";

const config: Config = {
    content: [
       "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
       "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                "clash-display-general": ["clash-display-general", "sans-serif"],
                "clash-display-big": ["clash-display-big", "sans-serif"],
                "travels-demibold": ["travels-demibold", "sans-serif"],
                "travels-medium": ["travels-medium", "sans-serif"],
            },
            backgroundImage: {
                'custom-gradient': 'linear-gradient(to bottom, #666 0%, #f0f0f0 20%, #999 100%)',
            },
        },
        
    },
    plugins: [],
};
export default config;