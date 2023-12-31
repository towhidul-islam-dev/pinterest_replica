/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      gridTemplateRows: {
        layout: "repeat(auto-fill, minmax(300px, 1fr))",
      },

      colors: {
        primary_shadow: "#E9E9E9",
        shadow: "#e2e2e2",
      },
    },
  },
  plugins: [],
};
