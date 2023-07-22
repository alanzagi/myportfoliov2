/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        13: "3.25rem",
        15: "3.75rem",
      },
    },
    screens: {
      mobile_m: "375px",
      mobile_l: "425px",
      tablet: "768px",
      laptop: "1024px",
      laptop_l: "1440px",
    },
    variants: {
      extend: {
        padding: ["responsive", "first", "last"],
      },
    },
  },
  plugins: [],
};
