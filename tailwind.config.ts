const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        "limed-spruce": {
          "50": "#f4f6f7",
          "100": "#e2e8eb",
          "200": "#c9d3d8",
          "300": "#a3b3bd",
          "400": "#768c9a",
          "500": "#5b717f",
          "600": "#4e5e6c",
          "700": "#44505a",
          "800": "#394149",
          "900": "#363d43",
          "950": "#21252b",
        },
        "electric-violet": {
          "50": "#f4f2ff",
          "100": "#eae8ff",
          "200": "#d7d4ff",
          "300": "#bab1ff",
          "400": "#9785ff",
          "500": "#6c47ff",
          "600": "#6430f7",
          "700": "#561ee3",
          "800": "#4818bf",
          "900": "#3c169c",
          "950": "#230b6a",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
