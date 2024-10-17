/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-outline-black': {
          textShadow: '0.25px 0.25px 0 black, -0.25px -0.25px 0 black, -0.25px 0.25px 0 black, 0.25px -0.25px 0 black',
        }
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}

