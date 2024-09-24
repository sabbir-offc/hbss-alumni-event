/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        light: "#000",
        dark: "#fff",
      },
      fontFamily: {
        "poppins": "'Poppins', sans- serif",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

