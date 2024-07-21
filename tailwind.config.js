/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'Bruno': ['Bruno Ace', 'sans-serif'],
      },
    },
    boxShadow: {
      'white-lg': '0px 0px 15px rgba(255, 255, 255, 0.5)',
      'white-xl': '0px 0px 50px rgba(255, 255, 255, 0.5)',
      'white-sm': '0px 0px 5px rgba(255, 255, 255, 0.5)',
    },
    
  },
  plugins: [],
}