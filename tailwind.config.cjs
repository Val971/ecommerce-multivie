/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-brown": "#D6CDA4",
        "light-green": "#3D8361",
        "dark-green": "#1C6758",
        "break-white": "#EEF2E6",
        "hero-bg": "#d6e5fb",
        "card-bg-01": "#fdefe6",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
