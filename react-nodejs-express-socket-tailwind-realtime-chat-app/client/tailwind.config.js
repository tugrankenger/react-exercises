/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme =>({
          'chat-image': "url('../public/bg-images/chat-bg.jpg')",
      })
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}