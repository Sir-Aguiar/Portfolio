module.exports = {
  content: ["./index.html", "./src/**/*.{html,ts,tsx}"],
  theme: {
    screens: {
      "md": { "min-width": "500px", "max-width": "1023px" },
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
      boxShadow: {
        "welcome-button": "6px 6px .5px #2d35a5, -6px -6px .5px #2d35a5",
        "about-card": "2px 2px 3px #a855f7, -2px -2.4px 2px #a855f7"
      }
    },
  },
  plugins: [],
}
