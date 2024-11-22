const carouselImages = document.querySelector('.carousel-divs');
const images = document.querySelectorAll('.carousel-div');
let currentIndex = 0;

// Função para mudar a imagem do carousel
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Vai para a próxima imagem e volta para a primeira no final
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Chama a função changeImage a cada 5 segundos
setInterval(changeImage, 5000);

// Funções para navegação manual
document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
});