/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    theme:["light"]
  },
  theme: {
    extend: {
     
    },
   fontFamily:{
      abc:["Raleway", "sans-serif"],
      poppins:[ "Poppins", "sans-serif"]
   } 
  },
  plugins: [],
}