/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          1: "#112123",
          2: "#113536",
          3: "#144848",
          4: "#146262",
          5: "#138585",
          6: "#13a8a8",
          7: "#33bcb7",
          8: "#58d1c9",
          9: "#84e2d8",
          10: "#b2f1e8",
        },
      },
    },
  },
  plugins: [],
};
