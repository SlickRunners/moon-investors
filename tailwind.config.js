/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'magenta': '#FF7A7A',
        'lightPurple': '#695EE6'
      },
      fontFamily: {
        Poppins: ['Poppins']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
