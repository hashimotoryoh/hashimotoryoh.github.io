/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  content: [],
  theme: {
    extend: {
      textColor: {
        light: {
          DEFAULT: '#c9d1d9',
        },
      },
      backgroundColor: {
        dark: {
          DEFAULT: '#0d1117',
        },
      },
      borderColor: {
        light: {
          DEFAULT: '#c9d1d9',
        }
      }
    },
  },
  plugins: [],
}
