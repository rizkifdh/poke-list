/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-normal",
    "bg-fire",
    "bg-water",
    "bg-electric",
    "bg-grass",
    "bg-ice",
    "bg-fighting",
    "bg-poison",
    "bg-ground",
    "bg-flying",
    "bg-psychic",
    "bg-bug",
    "bg-rock",
    "bg-ghost",
    "bg-dragon",
    "bg-dark",
    "bg-steel",
    "bg-fairy",
    "bg-secondary",
  ],
  theme: {
    extend: {
      colors: {
        normal: "#A8A77A",
        fire: "#EE8130",
        water: "#6390F0",
        electric: "#F7D02C",
        grass: "#7AC74C",
        ice: "#96D9D6",
        fighting: "#C22E28",
        poison: "#A33EA1",
        ground: "#E2BF65",
        flying: "#A98FF3",
        psychic: "#F95587",
        bug: "#A6B91A",
        rock: "#B6A136",
        ghost: "#735797",
        dragon: "#6F35FC",
        dark: "#705746",
        steel: "#B7B7CE",
        fairy: "#D685AD",
        secondary: "#FFBB00",
      },
    },
  },
  plugins: [
    require("daisyui"),
    plugin(function ({ addUtilities, theme }) {
      const colors = theme("colors");
      const lightTextColors = [
        "fire",
        "fighting",
        "poison",
        "ground",
        "psychic",
        "rock",
        "ghost",
        "dragon",
        "dark",
      ];

      const newUtilities = {};

      Object.keys(colors).forEach((color) => {
        newUtilities[`.bg-${color}`] = {
          backgroundColor: colors[color],
          color: lightTextColors.includes(color) ? "white" : "black",
        };
      });

      addUtilities(newUtilities, ["responsive"]);
    }),
  ],
  daisyui: {
    themes: ["lemonade"],
  },
};
