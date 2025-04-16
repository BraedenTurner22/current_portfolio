/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px", // Custom breakpoint for larger screens
        "4xl": "2000px", // Another custom breakpoint for even larger screens
      },
    },
  },
  plugins: [],
};
