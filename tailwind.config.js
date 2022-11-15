module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      bgorange: "#fd5f00",
      bgblue: "#0d1128",
      textslate: "#666666",
    },
    extend: {
      backgroundImage: {
        "bg-1":
          "url('https://preview.colorlib.com/theme/fox/images/bg_1.jpg.webp')",
        "bg-2": "url('../public/bg_2.webp')",
        "bg-3": "url('../public/bg_3.jpg.webp')",
        
        "about-2": "url('../public/about-2.jpg.webp')",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};