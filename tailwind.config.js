/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
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
          yellow: '#FFD700',
          red: '#F44545'
        }
      },
      backgroundColor: {
        white: '#FFFDFA'
      },
      borderColor: {
        artemis: {
          blue: '#00BFFF',
          gray: 'rgba(33, 36, 39, 0.66)',
          black: '#212427',
          green: '#8BC34A',
          yellow: '#FFD700',
          red: '#F44545'
        }
      },
      backgroundImage: {
        'hero-gradient': "url('/images/hero-gradient.svg')",
        'error-cats': "url('/images/error-cats.svg')",
        'error-cats-mobile': "url('/images/error-cats-mobile.svg')",
        'mission-cats': "url('/images/mission-cats.svg')",
        'mission-cats-mobile': "url('/images/mission-cats-mobile.svg')"
      },
      screens: {
        md: '810px'
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' }
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(-2px)' },
          to: { opacity: 1, transform: 'translateX(0)' }
        },
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        },
        catSprint: {
          '7.6923076923%': {
            top: '0px',
            left: '0px'
          },
          '15.3846153846%': {
            top: '-62.5px',
            left: '0px'
          },
          '23.0769230769%': {
            top: '-125px',
            left: '0px'
          },
          '30.7692307692%': {
            top: '-187.5px',
            left: '0px'
          },
          '38.4615384615%': {
            top: '-250px',
            left: '0px'
          },
          '46.1538461538%': {
            top: '-312.5px',
            left: '0px'
          },
          '53.8461538462%': {
            top: '-375px',
            left: '0px'
          },
          '61.5384615385%': {
            top: '-437.5px',
            left: '0px'
          },
          '69.2307692308%': {
            top: '-500px',
            left: '0px'
          },
          '76.9230769231%': {
            top: '-562.5px',
            left: '0px'
          },
          '84.6153846154%': {
            top: '-625px',
            left: '0px'
          },
          '92.3076923077%': {
            top: '-687.5px',
            left: '0px'
          },
          '100%': {
            top: '-750px',
            left: '0px'
          }
        }
      },
      animation: {
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        catSprintAnim: 'catSprint 0.3939393939s infinite step-end',
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)'
      }
    }
  },
  plugins: []
}
