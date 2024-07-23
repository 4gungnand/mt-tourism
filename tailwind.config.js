/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Times New Roman"', 'ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
        sans: ['Quattrocento Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      colors: {
        ijo: "#144149",
        ijo2: "#164440",
        ijomuda: "D9ED82",
      },
    },
  },
  plugins: [],
};