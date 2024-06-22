/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        'pic':'100%'
      },
      screens:{
        'xs':'360px'
      }
    },
  },
  plugins: [],
}

