/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyfont: ['Mulish', "sans-serif"],
        titleFont: ['Mulish', "sans-serif"]
      },
      backgroundColor:{
        primaryColor: "#9ACA3F",
        darkBlueColor: "#00699B",
        displayBodyColor: '#f4f5f6',
      },
     colors: {
      primaryColor: "#9ACA3F",
      darkBlueColor: "#00699b",
      titleColor: '#1c3443',
      headingColor: '#00283b'
     },
    backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
