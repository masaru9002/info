/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "border-chase": "border-chase 3s linear infinite",
      },
    },
  },
  plugins: [],
};
