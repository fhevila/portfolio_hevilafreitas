/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      /* brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#2d2421",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#5fcfdd",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      orange: "#f0a94f",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#626965",
      lightGrey: "#8a938e",
      darkGrey: "#3f4441",
       */
      brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#2c2523",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#15d1e9",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      orange: "#fb9718",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#626965",
      lightGrey: "#978580",
      darkGrey: "#3f4441",
      
  rosaPink: "#F35588", // Vivid Pink
  rosaFraco: "#FFBBB4", // Light Pink
  rosaRosa: "#FF4081", // Pink
  rosaEscuro: "#C2185B", // Dark Pink
  verdeFraco: "#71A95A", // Olive Green
  verdeEscuro: "#007944", // Dark Green
  verdeVerde: "#388E3C", // Medium Sea Green
  verdeClaroclaro: "#C8E6C9", // Pale Green
  preto: "#212121", // Charcoal Black
  cinzaEscuro: "#757575", // Dark Gray
  cinzaClaro: "#BDBDBD", // Light Gray
  cinzaClaroclaro: "#FFFFFF", // White
    },
    extend: {
      boxShadow: {
        rosaClaroShadow: "0px 0px 20px 0px rgba(225, 187, 180, 0.5)",
        cyanBigShadow: "10px 10px 1000px 500px rgba(94, 206, 220, 0.3)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
        orangeBigShadow: "10px 10px 10000px 500px rgba(240, 169, 79, 0.3)",
        orangeMediumShadow: "10px 10px 2000px 150px rgba(240, 169, 79, 0.5)",
      },
    },
    fontFamily: {
      body: ["Gloria Hallelujah"],
      special: ['"Roboto"'],
    },
  },
  plugins: [],
};
