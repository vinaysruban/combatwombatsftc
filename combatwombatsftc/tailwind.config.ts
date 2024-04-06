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
        'xs': '320px',
        'ms': '380px',
        '3xl': '1920px',
        '4xl': '2248px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "screwdrivering": "url('/screwdriver.png')",
        "wave": "url('images/wave.svg')",
        "blob": "url('/images/blob2.svg')",
        "team-award": "url('/images/team-award.jpg')",
        "team": "url('/images/teams.jpg')",
        "scatter": "url('/images/circle-scatter-haikei1.svg')",
        "plain": "url('/images/image-plain.webp')",
        "multi": "url('/images/multi-waves.svg')",
        "multi-rev": "url('/images/waves-rev.svg')",
        },
      backgroundPosition: {
        "bottom-top": "center 28rem",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        beige: "#EBE2D3",
        darkgrey: "#171717",
        lightgrey: '#1c1c1c',
        combatgreen: "#8F9853",
        wombatbrown: "#927748",
        lightgreen: '#AFAE75',
        midbeige: '#c7bfb3',
        mutegrey: '#2b2a28',
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
