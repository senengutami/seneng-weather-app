/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: "rgb(236, 110, 76)",
      },
      fontFamily: {
        fira: ['"Fira Code"', "monospace"],
      },
    },
  },
  plugins: [],
};
