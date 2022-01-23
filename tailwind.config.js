module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 14px 37px hsl(0deg 3% 67% / 0%), 0 10px 10px rgb(0 0 0 / 8%)",
      },
      colors: {
        "custom-dark-blue": "#040f26",
        "primary-blue": "#19afff",
        "custom-orange": "#ef7c22",
        "custom-green": "#28a745",
        "light-green": "#eaf8f6",
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
