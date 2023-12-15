const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      colors: {
        buttonTransparenceBlack: 'rgba(0, 0, 0, 0.01)',
        buttonHoverTransparenceBlack: 'rgba(0, 0, 0, 0.2)',
        buttonTransparenceWhite: 'rgba(255, 255, 255, 0.025)',
        buttonHoverTransparenceWhite: 'rgba(255, 255, 255, 0.2)'
      },
      backgroundImage: {
        dark: "url('/DARK_bgcircles.svg')",
        light: "url('/LIGHT_bgcircles.svg')",
        fullDark: "url('/bg_dark.svg')",
        fullLight: "url('/LightMode.jpg')"
      },
      animation: {
        initialDropdown: 'dropdown 1s ease-in-out',
        initialSurgeup: 'surgeup 1s ease-in-out backwards',
        footer: 'footer 1s ease-in-out backwards'
      },
      keyframes: {
        dropdown: {
          '0%': {
            transform: 'translateY(-2rem)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0rem)',
            opacity: '100'
          }
        },
        surgeup: {
          '0%': {
            transform: 'translateY(2rem)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0rem)',
            opacity: '100'
          }
        },
        footer: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)'
          },

          '100%': {
            opacity: '100',
            transform: 'scale(1)'
          }
        }
      }
    }
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            }
          }
        },
        {
          values: theme('transitionDelay')
        }
      )
    })
  ]
}
