/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Asegúrate de incluir tus rutas aquí
  theme: {
    extend: {
      fontFamily: {
        sfpro: ['SF Pro', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
