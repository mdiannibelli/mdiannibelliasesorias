import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#F36605",
        darkBg: "#0B0603"
      },
      backgroundImage: {
        "gradient-cover": 
          "linear-gradient(90.21deg, rgb(11, 6, 3) -3.91%, rgb(30, 13, 1) 111.58%)"
        
      },
      fontFamily: {
        'saira': ['"Fira Sans Extra Condensed" sans-serif;']
      },
    }
  },
  plugins: [],
};
export default config;
