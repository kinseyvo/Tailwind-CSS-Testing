/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "twitter-blue": "#1DA1F2",
      },
    },
  },
  plugins: [],
  darkMode: ['selector', '[data-mode="dark"]'],
}

