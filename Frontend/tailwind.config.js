/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#0F172A', // Dark Charcoal
        secondary: '#111827', // Slate Dark, Perfect for project cards and sections
        primary_Accent: '#38BDF8', // Great for links, buttons, active states, Main Highlight Color
        secondary_Accent: '#A78BFA', // Optional, very limited use, Use only for hover effects or small highlights
        primary_Text: '#0D9488', // Pure white, clear and redable text
        secondary_Text: '#94A3B8', // Muted Gray, For descriptions, subtitles, meta text
        background_color: '#F0FDF4', // body color
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}