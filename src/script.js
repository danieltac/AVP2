function onMouseOver(infoid){
    const infoBanner = document.getElementById(infoid)
    infoBanner.style.zIndex = "10";
    infoBanner.style.opacity = "1";
    infoBanner.style.transition = "all 0.5s ease-in";
}

function onMouseOut(infoid){
    const infoBanner = document.getElementById(infoid)
    infoBanner.style.zIndex = "0";
    infoBanner.style.opacity = "0";
    infoBanner.style.transition = "all 0.5s ease-out";
}



// Função para inicializar um carrossel específico
function initializeCarousel(carouselId, enableAutoPlay = false) {
    // Seleciona os elementos específicos do carrossel
    const carouselContent = document.querySelector(`#${carouselId} .carousel-content`);
    const items = carouselContent.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    // Função para mudar o conteúdo do carousel
    function changeItem() {
        currentIndex = (currentIndex + 1) % items.length; // Vai para o próximo item
        carouselContent.style.transform = `translateX(-${currentIndex * 100}%)`; // Move o conteúdo
    }

    // Funções de navegação manual (para os botões)
    document.querySelector(`#${carouselId} .next`).addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        carouselContent.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    document.querySelector(`#${carouselId} .prev`).addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        carouselContent.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    // Função de autoplay (se for ativada)
    function autoPlay() {
        setInterval(changeItem, 5000); // Muda o item a cada 5 segundos
    }

    // Ativa o autoplay se necessário
    if (enableAutoPlay) {
        autoPlay();
    }
}

// Inicialize os carrosséis
initializeCarousel('carousel1', true);
initializeCarousel('carousel2');
initializeCarousel('carousel3', true);
initializeCarousel('carousel4', true);
initializeCarousel('carousel5', true);
