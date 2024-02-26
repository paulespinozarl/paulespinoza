/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        xd: "966px",
      },
      mwidth: {
        200: "665px",
      },
      width: {
        xxxl: "300px",
      },
      height: {
        "calc-64": "calc(100vh - 64px)",
      },
    },
  },
  plugins: [],
};
