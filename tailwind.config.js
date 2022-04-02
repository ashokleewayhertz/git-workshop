const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      
      
      fontFamily: {
        title: ['Trocchi', ...defaultTheme.fontFamily.serif],
        body: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '0814fe',
        secondary: '#0083fd',
        neutarl: '#384d70',
      },

    },
  },
  plugins: [],
};

