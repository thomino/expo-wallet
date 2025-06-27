/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}', 
    './components/**/*.{js,ts,tsx}',
    './providers/**/*.{js,ts,tsx}',
    './utils/**/*.{js,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
        text: "var(--color-text)",
        invert: "var(--color-invert)",
      },
    },
  },
  plugins: [],
};
