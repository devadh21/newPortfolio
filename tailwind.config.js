/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6B00',
        'secondary': '#606060',
        'primary-light': '#FFF5EF',
        'bg-color': '#101010',
        'bg-color2': '#1a1a1a',
        'bg-color-light': '#ffffff',
        'bg-color2-light': '#FFF5EF',
        'color-text': '#cccccc',
        'color-text-light': '#101010',
        'orange-border': '#FFE2D1',
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
      animation: {
        'float-up-down': 'floatUpDown 3s infinite ease-in-out',
        'rotate-360': 'rotate360 6s linear infinite',
        'bg-move-3d': 'BgMove3D 2s linear infinite',
      },
      keyframes: {
        floatUpDown: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        BgMove3D: {
          '0%': { transform: 'translate3d(0px, 0px, 0px)' },
          '50%': { transform: 'translate3d(-30px, -30px, -30px)' },
          '100%': { transform: 'translate3d(0px, 0px, 0px)' },
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}
