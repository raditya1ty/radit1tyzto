// script.js
const carousel = document.getElementById('carousel');
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;
const totalImages = images.length;

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Fungsi untuk menggeser gambar
function moveToIndex(index) {
    if (index < 0) {
        currentIndex = totalImages - 1;  // Kembali ke gambar terakhir
    } else if (index >= totalImages) {
        currentIndex = 0;  // Kembali ke gambar pertama
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;  // Geser carousel ke posisi gambar yang sesuai
    carousel.style.transform = `translateX(${offset}%)`;
}

// Fungsi untuk pindah gambar sebelumnya
prevButton.addEventListener('click', () => {
    moveToIndex(currentIndex - 1);
});

// Fungsi untuk pindah gambar berikutnya
nextButton.addEventListener('click', () => {
    moveToIndex(currentIndex + 1);
});

// Otomatis ganti gambar setiap 3 detik
setInterval(() => {
    moveToIndex(currentIndex + 1);
}, 3000); // Ganti gambar setiap 3 detik




const tombolTopup = document.querySelector('.tombol-topup');
const suaraTopup = document.getElementById('suara-topup');

tombolTopup.addEventListener('click', function() {
 suaraTopup.play();
 alert('Topup berhasil!');
});
