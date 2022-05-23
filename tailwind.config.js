module.exports = {
  content: ["./index.html", "./src/**/*.{html,ts,tsx}"],
  theme: {
    screens: {
      "desktop": { "min-width": "1024px" }
    },
    extend: {

      colors: {
        "header": "#091228f5",
        "default": "#091228"
      },
      fontFamily: {
        "Plex-Sans": ['IBM Plex Sans', "sans-serif"],
        "Poppins": ['Poppins', "sans-serif"],
        "Roboto": ['Roboto', "sans-serif"]
      },
      borderRadius: {

      },
      backgroundImages: {

      }

    },
  },
  plugins: [],
}
