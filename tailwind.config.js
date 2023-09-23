/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        "h-custom":"10%",
        "90%":"90%",
      }
    },
  },
  plugins: [],
}

