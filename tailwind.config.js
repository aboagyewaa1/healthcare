/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      boxShadow:{
        'mid':'10px 40px 50px 0px rgba(229, 233, 246, 0.40',
        'smm': '0px 4px 70px 0px rgba(0, 0, 0, 0.10)'
      }
    },
  },
  plugins: [],
}

