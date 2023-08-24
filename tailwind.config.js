/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'blob': 'url("/images/dos.svg")',
      },
      colors: {
        'morke-lilla': '#15213E',
        'lilla': '#673469',
        'oransje': '#FB7339'
      },
      fontFamily: {
        syne: "'Syne', sans-serif",
        habibi: "'Habibi', serif",
        poppins: "'Poppins', sans-serif",
      },    
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
      themes: ["light","dark","cupcake"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
      base: true, // applies background color and foreground color for root element by default
      styled: true, // include daisyUI colors and design decisions for all components
      utils: true, // adds responsive and modifier utility classes
      rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
      prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
      logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    }
}
