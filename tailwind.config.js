/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        bg1: "#1B262C",
        bg2: "#0F4C75",
        bg3: "#3282B8",
        bg4: "#BBE1FA"
      },
      fontFamily: {
        poppins: 'Poppins'
      },
      textColor: {
        color1: "#711DB0",
        color2:"#C21292"
      }
    },
  },
  plugins: [require("daisyui")],
}

