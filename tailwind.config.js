module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'accent-1': '#333'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
