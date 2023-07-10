/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
        "basic-white": "#fffffc",
        "light-gray": "#383838",
        dark: "#292929",
        "dark-text": "#404854",
      },
      backgroundColor: {
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        header: ["Playfair Display", "serif"],
      },
      boxShadow: {
        custom: "0 0 10px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
