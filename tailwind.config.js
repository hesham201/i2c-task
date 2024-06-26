/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "custom-blue": "rgba(70, 176, 230, 1)",
        "custom-gold": "rgba(248, 157, 33, 1)",
        "custom-dark": "rgba(81, 81, 81, 1)",
      },
      backgroundImage: {
        "custom-radial":
          "radial-gradient(circle,  rgba(255, 223, 124, 1),rgba(246, 251, 248, 0.5),rgb(235, 240, 254))",
        "custom-linear":
          "linear-gradient(to right, rgb(235, 240, 255), rgb(235, 240, 254),rgb(235, 240, 253),rgb(235, 240, 252),rgb(235, 240, 253),rgb(235, 240, 254),rgb(235, 240, 255))",
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
};
