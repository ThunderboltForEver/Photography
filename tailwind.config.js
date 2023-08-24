/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        width: {
          default: "100%",
        },
        padding: {
          default: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",
        },
      },
    },
  },
  plugins: [],
};
