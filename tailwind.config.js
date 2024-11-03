/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",     
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    colors: {
      body: "#f7f7f7", // Light grey for the body background
      white: "#ffffff",
      green: { DEFAULT: "#2ca02c", hover: "#245b24" }, // A vibrant green
      black: { DEFAULT: "#1c1c1c", hover: "#121212" }, // Darker black for hover
      grey: "#7d7d7d", // Darker grey
      orange: {
        DEFAULT: "#ff7f0e", // Brighter orange
        hover: "#d65f0d", // Darker orange for hover
      },
      blue: {
        light: "#4a90e2", // Light blue
        DEFAULT: "#003366", // Dark blue
        dark: "#001f33", // Darker blue
      },
      outLine: "#e0e0e0", // Slightly darker outline
      pink: "#ff6f61", // A soft pink
    },
    extend: {
      fontFamily: {
        lora: ['var(--font-lora)', 'serif'], // Corrected typo
        poppins: ['var(--font-poppins)', 'sans-serif'], // Corrected typo
      },
      boxShadow: {
        primary: "40px 4px 0px rgba(68, 68, 68, 0.2)", // Slightly adjusted opacity
      },
      backgroundImage: {
        hero: "linear-gradient(to bottom, #003366, #001f33)", // Dark blue gradient
        menu: "url(/menu/bg.png)",
        reservation: "url(/reservation/bg.png)",
        footer: "linear-gradient(to bottom, #003366, #001f33)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
