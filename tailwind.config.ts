import type { Config } from "tailwindcss";

const config: Config = {
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
      fontFamily:{
        Kanit:['Kanit', 'sans-serif'],
        Inter:['Inter','sans-serif']
      },
      colors:{
        customYellow: '#FECC00',
        customGolden:'#F9D326',
        customLightYellow:'#FEA800',
        customLightDark:'#0E0E0E',
        YellowLightShade:'#b8a453',
        blackWithgold:'#5e511a'
      }
    },
  },
  plugins: [],
};
export default config;
