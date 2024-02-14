/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "rgb(255, 199, 0)",
        black: "rgba(0, 0, 0, 1)",
      },
      maxWidth: {
        1400: "1400px",
      },
    },
  },
  plugins: [],
};
