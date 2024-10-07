import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
         accent:"#0989FF",
         topHeadingPrimary:"#1A202C",
          topHeadingSecondary:"#718096",
          pink:"#021d35"
      },
      container:{
        center:true,
        padding:'15px',

      },
    },
  },
  plugins: [],
};
export default config;
