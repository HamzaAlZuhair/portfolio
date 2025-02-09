import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        slideIn: "slideIn 0.7s ease-in-out forwards",
        fadeIn: 'fadeIn 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
