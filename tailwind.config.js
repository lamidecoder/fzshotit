/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        "ink-soft": "#141414",
        bone: "#F2EFE9",
        "bone-dim": "#9A958A",
        henna: "#C2502B",
        "henna-bright": "#C2502B",
        gold: "#C2502B",
        clay: "rgba(242,239,233,0.14)",
        "clay-soft": "#141414",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
