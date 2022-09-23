/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Bebas Neue', 'cursive']
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
