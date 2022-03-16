module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        // '103px': '103px'
      }
    },
    container: {
      center: true,

      screens: {
        lg: '1440px',
      }
    }
  },
  plugins: [],
}
