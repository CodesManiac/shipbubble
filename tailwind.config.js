/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#0f172a',
      dark: '#1b1b1b',
      secondary: '#334155',
      white: '#ffffff',
      red: '#ff0000',
      transparent: 'transparent',
    },
    extend: {
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
