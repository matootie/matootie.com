module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {},
  variants: {
    extend: {
      translate: ['group-hover']
    }
  },
  plugins: []
}
