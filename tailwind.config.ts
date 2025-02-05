import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#5929BC",
        secondary: "#16151b",
      },
      backgroundImage: {
        hero: 'url("/hero-image.jpg")',
        section: 'url("/section.jpg")',
        services: "url(/services-bg.jpg)",
        footer: 'url("/footer-bg.jpg")',
        socials: 'url("/socials-banner.jpg")',
        webdev:
          'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/webdev-section.jpg")',
      },
      boxShadow: {
        custom: "0 0 10px rgba(0, 0, 0, 0.4)",
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
} satisfies Config;
