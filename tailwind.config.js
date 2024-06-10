/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'custom-black': '#111827',
          'custom-gray' : '#1d2432',
          'custom-border' : '343a47',
          'gradient-black' : 'linear-gradient(148deg, #1C1B1B 37.99%, #121111 95.56%)'
          
      }
      
    },
  },
  darkMode: "class",
  plugins: [require("daisyui"), nextui()],
}
