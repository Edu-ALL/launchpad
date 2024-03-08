/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/public/assets/images/banner.webp')",
        parenting_educational: "url('/public/assets/images/parenting_educational/background.webp')",
        "eduall-360": "url('/public/assets/images/eduall-360/background.webp')",
        register: "url('/public/assets/images/register/register-banner.webp')",
        "scholarship-item-badge": "url('/public/assets/images/scolarship/item-badge.webp')",
      },
      colors: {
        primary: "#120FFD",
        secondary: "#243872",
        yellow: "#F4EA0F",
      },
      fontFamily: {
        primary: ["Ambit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
