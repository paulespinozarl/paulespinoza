/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'xd': '966px',
      },
      mwidth: {
        '200': '500px'
      }
    },
  },
  plugins: [],
}

