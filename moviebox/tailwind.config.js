/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "rgb(255, 199, 0)",
        black: "rgba(0, 0, 0, 1)",
        main: 'rgba(0, 0, 0, 0.8)'
      },
      sizes: {
        1500: "1500px",
        2500: '2500px',
        600: '600px',
      },
      font: {
        mainFont: 'Roboto, sans-serif'
      }
    },
  },
  plugins: [],
};
