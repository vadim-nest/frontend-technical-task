/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      charcoal: '#17211C',
      white: '#FFFFFF',
      nutty: '#BE8D65',
      mustard: '#D39100',
      pesto: '#7A7A2E',
      radicchio: '#723141',
      kale: '#213323',
      oat: '#F9F4F1',
      dhal: '#C74D24',
      grey: 'rgba(0,0,0,.5)',
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
    },
    fontFamily: {
      body: ['Work Sans', 'Arial', 'Helvetica', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
