const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#050505',
      black80: '#1f1f1f',
      black60: '#2d2d2d',
      black40: '#3a3a3a',
      'dark-grey': '#757575',
      grey: '#e9e9e9',
      'light-grey': '#f4f4f4',
      white: '#ffffff',
      purple: '#a445ed',
      red: '#ff5252'
    },
    fontFamily: {
      inter: 'Inter, sans-serif',
      lora: 'Lora, serif',
      inconsolata: 'Inconsolata, monospace'
    },
    fontSize: {
      'body-s': ['0.875rem', { // 14px
        lineHeight: '1.0625rem', // 17px
        fontWeight: 400
      }],
      'body-m': ['1.125rem', { // 18px
        lineHeight: '1.5rem', // 24px
        fontWeight: 400
      }],
      'heading-s': ['1.25rem', { // 20px
        lineHeight: '1.5rem', // 24px
        fontWeight: 400
      }],
      'heading-m': ['1.5rem', { // 24px
        lineHeight: '1.8125rem', //29px
        fontWeight: 400
      }],
      'heading-l': ['4rem', { // 64px
        lineHeight: '4.8125rem', // 77 px
        fontWeight: 700
      }]
    },
    borderRadius: {
      '2.5': '0.625rem',
      '4': '1rem',
      full: '50%'
    },
    extend: {
      boxShadow: {
        dropdown: '0px 5px 30px rgba(0, 0, 0, 0.1)'
      },
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-fill': (value) => ({
            '-webkit-text-fill-color': value
          }),
        },
        { values: theme('colors') }
      )
    })
  ],
}
