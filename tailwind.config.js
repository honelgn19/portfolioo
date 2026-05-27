/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        silver: "#C0C0C0",
        "soft-silver": "#D9D9D9",
        graphite: "#121212",
      },
    },
  },
  plugins: [],
}