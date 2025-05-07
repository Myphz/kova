// NB: SvelteKit aliases don't work here!

import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontSize: {
      "h-1": "3rem",
      "h-2": "2.5rem",
      "h-3": "1.75rem",
      "h-4": "1.5rem",
      button: "1.25rem",
      body: "1rem",
      small: "0.875rem",
      xs: "0.75rem"
    },
    fontFamily: {
      body: "'Rajdhani', sans-serif;"
    },
    colors: {
      transparent: "transparent",
      primary: "#C24C50",
      secondary: "#34E3F9",
      border: "#332427",
      text: "#ACA3A8",
      background: "#151010",
      accent: "#FEE329"
    }
  }
} satisfies Config;
