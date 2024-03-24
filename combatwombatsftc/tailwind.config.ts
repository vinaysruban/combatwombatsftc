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
        "bhasu1": "url('https://scontent.cdninstagram.com/v/t39.30808-6/404111294_850270650434402_4500845800267661722_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDI0eDc2OC5zZHIifQ&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=mVGXqhLcXq4AX9DUmT3&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI0MTI1NDA3MTA1NjgyMzQ2MA%3D%3D.2-ccb7-5&oh=00_AfC_tLD7U636O4NrvkAxNanwgihBYHaE9A7ayGDpSrOiew&oe=66046179&_nc_sid=10d13b')",
        "bhasu2": "url('https://scontent.cdninstagram.com/v/t39.30808-6/404170364_850270663767734_5733572467575575612_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDI0eDc2OC5zZHIifQ&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=yvK8f24H598AX_lUDW4&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI0MTI1NDA2OTE1MjU1MDIwNA%3D%3D.2-ccb7-5&oh=00_AfDwNqUMdVMicpHvNFxRUcg0NGkxSTVwGR1aP5Yl1QqriA&oe=6603FE23&_nc_sid=10d13b')",
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
