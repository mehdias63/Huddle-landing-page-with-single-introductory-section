/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      pop: ["Poppins"],
      open: ["Open Sans"],
    },
    extend: {
      colors: {
        purple: "#684BB1",
        pink: "#E880E8",
        deeppink: "#FF52C1",
      },
    },
  },
  plugins: [],
};
