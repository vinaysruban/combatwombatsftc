import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        'small': '32rem',
        'medium': '36rem',
        'moderate': '58rem',
        'xmoderate': '40rem',
        'large': '48rem',
        'xlarge': '68rem',
        '58': '14.5rem',
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2248px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "screwdrivering": "url('/screwdriver.png')",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        beige: "#EBE2D3",
        darkbeige: "#171717",
        darkerbeige: '#1c1c1c',
        combatgreen: "#8F9853",
        wombatbrown: "#927748",
        backgreen: '#AFAE75',
        midbeige: '#c7bfb3',
        darkmidbeige: '#2b2a28',
      },
      fontFamily: {
        mona: ["Mona Sans", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require("tailwind-children"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
export default config;
