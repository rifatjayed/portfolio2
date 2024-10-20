/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Neue Regrade", "sans-serif"],
      },
      // Aidai toh
      // fontSize: {
      //   "custom-250": "250px",
      //   "custom-18": "18px",
      // },
      // lineHeight: {
      //   "custom-241": "241px",
      //   "custom-80": "80.64px",
      //   "custom-22": "22.32px",
      // },
      // letterSpacing: {
      //   "custom-tight": "-0.02em",
      //   "custom-wide": "0.03em",
      // },
      // backgroundImage: {
      //   "custom-gradient":
      //     "linear-gradient(90deg, #595A7B 0%, #FFFFFF 50%, #595A7B 100%)",
      // },
      // colors: {
      //   "custom-gray": "#595A7B",
      // },
    },
  },
  plugins: [],
};
