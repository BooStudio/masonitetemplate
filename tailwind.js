const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
    theme: {
        minWidth: {
            0: "0",
            "1/4": "25%",
            "1/2": "50vw",
            "3/4": "80vw",
            screen: "100vw",
        },
        fontSize: {
            xmr: ".50rem",
            xs: ".95rem",
            sm: ".875rem",
            tiny: ".775rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.35rem",
            "25xl": "1.55rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "4rem",
            "7xl": "5rem",
        },
        backgroundSize: {
            auto: "auto",
            cover: "cover",
            contain: "contain",
            "50p": "150%",
            "16p": "4rem",
        },
    },
    variants: {},
    plugins: [],
};
