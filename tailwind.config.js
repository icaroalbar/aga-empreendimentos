/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          10: "#0F1A2E",
          20: "#172F4C",
        },
        secondary: {
          10: "#BE8F41",
        },
      },
      backgroundImage: {
        header: "url('/images/header.png')",
        company: "url('/images/company.png')",
        mvv: "url('/images/mvv.png')",
        contact: "url('/images/contact.jpg')",
      },
    },
  },
  plugins: [],
};
