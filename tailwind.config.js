/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      dmsans: ['"DM Sans"', "sans-serif"],
    },
    letterSpacing:{
      morewidest: '.4em'
    },
    extend: {
      // backgroundImage: {
      //   'mountains': "url('/mountains.png')",
      // },
      fontSize:{
        '50vh': '50vh',
      },
      height:{
        '100vh-h-36': 'calc(100vh - 6rem)',
      },
      colors: {
        darkBlueBg: "#0c0c1d",
        lightGrayText: "#9ca3af",
        lightDarkBlueBg: "#111132",
      },
    },
  },
  plugins: [],
};
