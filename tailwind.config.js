module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      fontFamily: {
        "outfit": ["Outfit, sans-serif"],
        "courier-prime": ["Courier Prime, monospace"],
        // "poppins": ["poppins, sans-serif"],
      },
      colors:{
        'mms-green': '#4AAF22',
        'mms-blue': '#0147FD',
        'mms-red': '#F62B01',
      }
    },
  },
  plugins: [],
}
