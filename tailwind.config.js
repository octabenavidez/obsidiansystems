// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
        tight: ['"Inter Tight"', "sans-serif"],
        instrument: ['"Instrument Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
