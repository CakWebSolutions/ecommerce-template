import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        custom: "0px 8px 16px rgba(0, 0, 0, 0.08)",
        custom2: "25px 25px 50px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        // Add your custom font along with fallbacks
        playfairRegular: ['"PlayFairDisplaySC-Regular"', "serif"],
        playfairBold: ['"PlayFairDisplaySC-Bold"', "serif"],
        jacques: ["Jacques Francois", "serif"], // Example of another custom font
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
