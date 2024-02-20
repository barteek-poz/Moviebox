/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "rgb(255, 199, 0)",
        black: "rgba(0, 0, 0, 1)",
        main: "rgba(0, 0, 0, 0.8)",
      },
      maxWidth: {
        1500: "1500px",
        2500: "2500px",
        600: "600px",
        500: '500px'
      },
      minWidth: {
        400: '400px',
        500: '500px',
      },
      font: {
        mainFont: "Roboto, sans-serif",
      },
      height: {
        700: "700px",
        400: '400px',
        900: "900px",
        335: "335px",
      },
      keyframes: {
        slidein: {
          "0%": { height: "0" },
          "100%": { heigth: "100%" },
        },
      },
      animation: {
        slidein: "slidein .4s",
      },
    },
  },
  plugins: [],
};
