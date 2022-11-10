/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
      screens: {
        'xs':'480px',
        'sm': '640px',  
        'md': '768px',  
        'lg': '1024px',  
        'xl': '1280px',  
        '2xl': '1536px',      
      },
     extend: {
      height: {
        '128': '42rem',
        '100':'34rem',
        '110':'38rem',
      },
      translate: {
        '4.25': '17rem',
        '110': '38rem',
        '128': '42rem',
        '164': '62rem',
        'hidden':'86rem',
      },
      inset:{
        '10':'10%',
        '21':'21%',
        '35':'35%',
      },
      width:{
        '10%':'10%',
        '20%':'20%',
        '30%':'30%',
        '75%':'75%',
        '80%':'80%',
        '70%':'70%',
        '90%':'90%',
        '100%':'100%',
      },
     },
  },
  plugins: [],
}
