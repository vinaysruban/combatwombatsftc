import { fontFamily } from 'tailwindcss/defaultTheme'
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'beige': '#EBE2D3',
        'darkbeige': '#1f1e1d',
        'combatgreen': '#8F9853',
        'wombatbrown': '#927748',
      },
      fontFamily: {
        'raleway': ['Raleway', ...fontFamily.sans],
        'mona': ['Mona Sans', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwind-children'),],
};
export default config;
