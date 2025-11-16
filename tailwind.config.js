module.exports = {
  // Beri tahu Tailwind untuk memindai SEMUA file .html di folder ini
  content: [
    "./*.html",
  ],
  
  // Ini adalah tema kustom Anda dari file HTML asli
  theme: {
    extend: {
      colors: {
        'emas': '#D4AF37',
        'emas-dark': '#c09d32',
        'hitam-jqk': '#101010'
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Lato', 'sans-serif']
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  },
  plugins: [],
}