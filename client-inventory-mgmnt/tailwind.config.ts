import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";
import colors from "tailwindcss/colors";

// base colours for the theme
const baseColors = [
  "gray",
  "red",
   "yellow",
    "green",
     "blue",
      "indigo",
       "purple",
        "pink"
      ];


// Mapping light and dark mode shades (e.g., light theme 50 becomes dark theme 900)
const shadeMapping = {
  "50": "900",
  "100": "800",
  "200": "700",
  "300": "600",
  "400": "500",
  "500": "400",
  "600": "300",
  "700": "200",
  "800": "100",
  "900": "50",
};

// Function to create a theme (light or dark) based on whether we invert shades
const createTheme = (invertShades = false) => {
  const theme: Record<string, Record<string, string>> = {};

  baseColors.forEach((color) => {
    theme[color] = {};

    // Loop through each light-to-dark shade pair in the mapping
    Object.entries(shadeMapping).forEach(([lightShade, darkShade]) => {
      const shadeKey = invertShades ? darkShade : lightShade;
      theme[color][lightShade] = colors[color][shadeKey];
    });
  });

  return theme;
};

// Define light and dark themes
const lightTheme = createTheme();
const darkTheme = createTheme(true);



// Combine themes with custom colours for light and dark modes
const themes = {
  light: {
    ...lightTheme,
    white: "#ffffff",
  },
  dark: {
    ...darkTheme,
    white: colors.gray["950"],
    black: colors.gray["50"],
  },
};

// Tailwind CSS configuration
const config: Config = {
  darkMode: "class",  // Enable dark mode using the "dark" class
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  // Add the custom themes to the configuration
  plugins: [createThemes(themes)],
};


export default config;
