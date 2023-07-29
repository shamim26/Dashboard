/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        custom: "284px, 1fr",
      },
    },
  },
  plugins: [],
};
