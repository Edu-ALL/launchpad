/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
      extend: {
          backgroundImage: {
            'banner': "url('/public/assets/images/banner.png')",
            'parenting_educational': "url('/public/assets/images/parenting_educational/background.png')",
            'eduall-360': "url('/public/assets/images/eduall-360/background.png')",
            'register': "url('/public/assets/images/register/register-banner.png')"
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
