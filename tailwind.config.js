/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      colors: {
        "basic-white": "#fff",
        "light-gray": "#383838",
        "lighter-gray": "#f7f7f7",
        dark: "#292929",
        "dark-text": "#404854",
        accent: "var(--accent-color)",
      },
      backgroundColor: {
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        header: ["Playfair Display", "serif"],
      },
      boxShadow: {
        custom: "0 0 10px rgba(0, 0, 0, 0.35)",
        "accent-glow": "0 0 10px var(--accent-color)",
      },
      zIndex: {
        nav: "50",
        dropdown: "80",
        overlay: "90",
        modal: "1000",
      },
      animation: {
        "ping-slow": "ping 2s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".site-container": {
          maxWidth: "540px",
          "@screen md": { maxWidth: "720px" },
          "@screen lg": { maxWidth: "960px" },
          "@screen xl": { maxWidth: "1140px" },
        },
      });
    },
  ],
};
