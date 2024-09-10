const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
let currentImage = 0;

function nextImage() {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
    setTimeout(nextImage, 3000);
}

nextImage();