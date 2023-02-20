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
        dark: "url('/Darkmode_phone.jpg')",
        light: "url('/Lightmode_phone.jpg')",
        fullDark: "url('/DarkMode.jpg')",
        fullLight: "url('/LightMode.jpg')"
      }
    }
  },
  plugins: [

  ]
}
