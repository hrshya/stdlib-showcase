const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue" : "#242037",
        "dark-pink" : "#F26C92",
        "light-pink" : "#FBE5EC",
        "white-wheat" : "#FDF2F5",
        "light-blue" : "#EBF5F5",
      },
    },
  },
  plugins: [],
});


