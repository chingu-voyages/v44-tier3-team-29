/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        artemis: {
          white: '#FFFDFA',
          black: '#212427',
          gray: 'rgba(33, 36, 39, 0.66)',
          blue: '#00BFFF',
          green: '#8BC34A',
          yellow: '#FFD700'
          }
      },
      backgroundColor: {
        white: '#FFFDFA',
      },
      borderColor: {
        artemis: {
          blue: '#00BFFF',
          gray: 'rgba(33, 36, 39, 0.66)',
          black: '#212427',
          green: '#8BC34A',
          yellow: '#FFD700'
        }
      },
      backgroundImage: {
        'hero-gradient': "url('/images/hero-gradient.svg')",
      },
      screens: {
        'md': '810px',
      }
    },
  },
  plugins: [],
}
