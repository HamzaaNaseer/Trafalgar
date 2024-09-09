/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        muli: ["Muli", "sans-serif"],
      },
      colors: {
        buttons: "#458FF6",
        "text-color": "#7D7987",
        "heading-color": "#000000",
      },
      backgroundImage: {
        'hero-bg':"url('./src/assets/bg-hero.svg')"
      }
    },
  },
  plugins: [],
};
