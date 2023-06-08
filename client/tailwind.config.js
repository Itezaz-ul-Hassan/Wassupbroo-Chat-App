/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        nav: {
          height: "71px",
        },
      },
      colors: {
        primary: "#10b981",
        shaded: "#6b7280",
        secondary: "#3b82f6",
      },
      keyframes: {
        "0%": {},
      },
      animation: {},
    },
  },
  plugins: [],
};
