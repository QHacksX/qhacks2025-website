import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "title-size": "3.5rem",
      },
      colors: {
        "brand-orange-900": "#F76A1E",
        "brand-orange-800": "#F7841F",
        "brand-orange-700": "#F69C25",
        "brand-orange-600": "#F7A627",
        "brand-orange-500": "#F7B32B",
        "brand-light-blue": "#C9E7FF",
        "brand-dark-blue": "#000AFF",
        "brand-light-red": "#CA3333",
        "brand-dark-red": "#CB372D",
        "tricolor-dark-blue": "#022B76",
        "tricolor-light-blue": "#032B76",
        "tricolor-dark-red": "#CB372D",
        "tricolor-bright-red": "#EE4036",
        "tricolor-yellow": "#E2A022",
        "brand-card-bg": "#353535",
      },
      "animation": {
        "gradient-x": "gradient-x 5s ease infinite",
        "gradient-y": "gradient-y 5s ease infinite",
        "gradient-xy": "gradient-xy 5s ease infinite",
      },
      "keyframes": {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
