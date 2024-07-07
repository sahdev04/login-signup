/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        aquamarine: "#8bffe3",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#dbdbdb",
        },
        midnightblue: "#160062",
        gray: {
          "100": "#0e0e0e",
          "200": "#000c14",
          "300": "rgba(0, 0, 0, 0.7)",
          "400": "rgba(255, 255, 255, 0.9)",
          "500": "rgba(0, 0, 0, 0.8)",
          "600": "rgba(0, 0, 0, 0.5)",
          "700": "rgba(0, 0, 0, 0.6)",
          "800": "rgba(0, 0, 0, 0.4)",
        },
        darkslategray: "rgba(51, 51, 51, 0.4)",
        royalblue: "#0e64d2",
        dodgerblue: "#338af7",
        indianred: "#e86969",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      mini: "15px",
      xl: "20px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
