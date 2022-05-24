module.exports = {
  content: ["./src/components/*.{ts,tsx}"],
  theme: {
    colors: {
      //Background
      primary: "#F9F9F9",
      secondary: "#363636",
      //Font
      lightGray: "#363636",
      darkGray: "#2D2D2D",
    },
    screens: {
      sm: { max: "600px" },
      md: { min: "601px" },
      lg: { min: "1024px" },
      xl: { min: "1440px" },
    },
    extend: {},
  },
  plugins: [],
};
