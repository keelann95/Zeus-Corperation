/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ed8112',
          light: '#f3d79e',
          dark: '#dc6a0e',
        },
        secondary: {
          DEFAULT: '#1d1f27',
          light: '#383a45',
          dark: '#15161e',
        },
        background: {
          light: '#fbfbfb',
          DEFAULT: '#f7f7f7',
          dark: '#eeeeee',
        },
        text: {
          DEFAULT: '#1d1f27',
          muted: '#747c81',
          light: '#959698',
        },
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
