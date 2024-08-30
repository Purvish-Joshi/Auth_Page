/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light300: "#E5E7EB",
        light200: "#FAFAFA",
        light100: "#ffffff",
        dark300: "#1f2937",
        dark200: "#030712",
        dark100: "#111827",
      },
    },
  },
  plugins: [],
};
