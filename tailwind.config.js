export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      screens: {
        Mobile : "375px",
        Tablet : "900px",
        Desktop: "1440px",
      },
      
      colors: {
        "neutral-dark-slate-grey": "hsl(234, 29%, 20%)",
        "primary-tomato": "hsl(4, 100%, 67%)",
        "neutral-charcoal-grey": "hsl(235, 18%, 26%)",
        "neutral-grey": "hsl(231, 7%, 60%)",
        "neutral-white" : " hsl(0, 0%, 100%)",
         "primary-redpink" : "#FF3E83"

      },
      backgroundImage : {
        "hero-pattern" : "url('/blob-scene-haikei(1).svg')",
      }
    },
  },
  plugins: [],
};