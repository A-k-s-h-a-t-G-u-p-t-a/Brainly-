/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*{.ts,.js,.jsx,.tsx}',
  ],
  theme: {
    extend: {
      colors:{
        gray:{
          900:"#4a5361",
          700:"#47505f",
          300:"#f9fafb"
        },
        purple:{
          200:"#e0e7ff",
          300:"#534bcf",
          500:"#5046e4"
        }
      }
    },
  },
  plugins: [],
}

