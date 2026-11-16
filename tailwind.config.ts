import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { vanilla: "#FBF7F0", cocoa: "#38251F", berry: "#743C4B", champagne: "#C9A66B", ink: "#2B211D" },
    fontFamily: { display: ["var(--font-playfair)"], sans: ["var(--font-dm-sans)"] },
    boxShadow: { soft: "0 20px 60px rgba(56,37,31,.10)" }
  } },
  plugins: []
};
export default config;