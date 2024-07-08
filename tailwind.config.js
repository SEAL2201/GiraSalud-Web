/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          custom: ['MyFont1', 'losta-masta-medium'], 
          custom1: ['MyFont2', 'moon-bold'],
          custom2: ['MyFont3', 'Daily Challenge DEMO'],
        },
        colors: {
          customColor: '#ffd490b5',
          customTextColor: '#f7941d',
              },
            },
    },
    plugins: [],
  }
  // module.exports = {
  //   theme: {
  //     extend: {
  //       colors: {
  //         customColor: '#ffd490b5',
  //       },
  //     },
  //   },
  //   variants: {},
  //   plugins: [],
  // }
  
  
  