/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: '#12233F',
        royalblue: '#1E4FBF',
        lightblue: '#4C8DFF',
        royalgreen: '#0E6E4F',
        gold: '#FFD400',
        signalred: '#CD1C18',
        charcoal: '#23272B',
        paper: '#F6F7F5',
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}