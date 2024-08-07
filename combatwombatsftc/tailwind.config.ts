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
      fontSize: {
        "3.5xl": "2rem",
        "8.5xl": "7rem",
        "10xl": "10rem",
      },
      spacing: {
        small: "32rem",
        medium: "36rem",
        moderate: "58rem",
        xmoderate: "40rem",
        large: "48rem",
        xlarge: "68rem",
        "58": "14.5rem",
      },
      screens: {
        xs: "320px",
        ms: "380px",
        "3xl": "1920px",
        "4xl": "2248px",
        "5xl": "2520px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        screwdrivering: "url('/screwdriver.png')",
        wave: "url('images/wave.svg')",
        blob: "url('/images/blob2.svg')",
        "team-award": "url('/images/team-award.jpg')",
        team: "url('/images/teams.jpg')",
        scatter: "url('/images/circle-scatter-haikei1.svg')",
        plain: "url('/images/image-plain.webp')",
        multi: "url('/images/multi-waves.svg')",
        "multi-rev": "url('/images/waves-rev.svg')",
        "waves-brown": 'url("/images/waves-brown.svg")',
      },
      backgroundPosition: {
        "bottom-top": "center 28rem",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        beige: "#EBE2D3",
        darkgrey: "#171717",
        lightgrey: "#1c1c1c",
        combatgreen: "#8F9853",
        wombatbrown: "#927748",
        lightgreen: "#AFAE75",
        midbeige: "#c7bfb3",
        mutegrey: "#2b2a28",
      },
      fontFamily: {
        mona: ["Mona Sans", ...fontFamily.sans],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 7))" },
        },
        scrollLong: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-375px * 7))" },
        },
        scrollShort: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-187.5px * 7))" },
        },
        pulseUpgrade: {
          "0%": { boxShadow: "0 0 0 0px rgba(0, 0, 0, 0.2)" },
          "100%": { boxShadow: "0 0 0 20px rgba(0, 0, 0, 0)" },
        },
      },
      animation: {
        scrolling: "scroll 40s linear infinite",
        "scrolling-long": "scrollLong 40s linear infinite",
        "scrolling-short": "scrollShort 40s linear infinite",
        pulseUpgrade: "pulseUpgrade 2s infinite",
      },
    },
  },
  plugins: [
    require("tailwind-children"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
export default config;
