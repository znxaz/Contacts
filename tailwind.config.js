/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom": "  rgba(0, 0, 0, 0.16) 1px 1px 4px;",
      },
      screens: {"xs": "360px"}, 
    },
  },
  plugins: [],
};
