module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#03153D',
        arctic: '#00AEEF',
        steel: '#5A6777',
        safety: '#FF6C0A'
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        ui: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Roboto Slab', 'serif']
      }
    }
  },
  plugins: []
}
