/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: "var(--bg-main)",
        bgSub: "var(--bg-sub)",
        brandMain: "var(--brand-main)",
        borderMain: "var(--border-main)",
        start: "#FF6F91",
        middle: "#FF9671",
        end: "#FFC75F",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
