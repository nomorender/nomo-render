/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", "sans-serif"],
        angelface: ['Angelface', 'cursive'],
        qochy: ['Qochy', 'cursive'],
      },
    },
    screens: {
      sm: '640px',
      md: '744px',
      lg: '1280px',
      xl: '1290px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}