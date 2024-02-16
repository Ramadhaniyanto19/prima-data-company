const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        yellow: {
          60: "#BBAA00",
        },
        myBlue: {
          200: "#86A7FC",
        },
        myZinc: {
          40: "#635552",
        },
        myPink: {
          10: "#fbf5f7",
        },
        myGreen: {
          10: "#80a055",
        },
      },
    },
  },
  plugins: [],
});
