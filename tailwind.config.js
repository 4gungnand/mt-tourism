/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Times New Roman', 'ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
        sans: ['Segoe UI', 'Roboto', "Helvetica Neue",],
      },
      colors: {
        color1: "#F1FBFB",
        color2: "#2B3D37",
        color3: "#164440",
        ijo: "#144149",
        abu: "#504F4A",
        nipis: "#D9ED82",
      },
    },
  },
  plugins: [],
};