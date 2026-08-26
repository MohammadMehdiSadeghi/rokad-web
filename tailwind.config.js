module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#21295a',
        'navy-alt': '#202a5a',
        teal: '#58bdaf',
        'teal-alt': '#59bbaf',
        'teal-dark': '#347e75',
        magenta: '#e0195b',
        amber: '#f8a41d',
      },
      fontFamily: {
        iransans: ['IRANSansX', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
