// Initialize AOS (Animate On Scroll) - wait for DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800, // Durasi animasi
            once: true     // Animasi hanya berjalan sekali
        });
    }
});