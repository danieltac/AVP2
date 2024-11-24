function onMouseOver(infoid) {
    const infoBanner = document.getElementById(infoid)
    infoBanner.style.zIndex = "10";
    infoBanner.style.opacity = "1";
    infoBanner.style.transition = "all 0.5s ease-in";
}

function onMouseOut(infoid) {
    const infoBanner = document.getElementById(infoid)
    infoBanner.style.zIndex = "0";
    infoBanner.style.opacity = "0";
    infoBanner.style.transition = "all 0.5s ease-out";
}
/*
function onCategoryCard(card, p) {
    const cardBanner = document.getElementById(card)
    const cardP = document.getElementById(p)
    // Adiciona a transição suave
    cardBanner.style.transition = "background 0.5s ease-in-out, background-size 0.2s ease-in-out";

    // Readiciona o gradiente junto com a imagem
    cardBanner.style.background = "radial-gradient(115% 120% at 0% 0%, transparent, #2880a6), url('imagens/strategy_cities_settlements.webp')";
    cardBanner.style.backgroundPosition = "center";
    cardBanner.style.backgroundSize = "120%";

    // Transições para o texto
    cardP.style.transition = "all .2s ease-in-out";
    cardP.style.marginBottom = "2rem";
}

function offCategoryCard(card, p) {
    const cardBanner = document.getElementById(card)
    const cardP = document.getElementById(p)
    //cardBanner.style.background = "radial-gradient(115% 120% at 0% 0%, transparent, #2880a6), url('imagens/strategy_cities_settlements.webp')";
    // Transição para o gradiente
    cardBanner.style.transition = "background 0.5s ease"; // Transição suave para a propriedade background
    cardBanner.style.background = "url('imagens/strategy_cities_settlements.webp')"; // Remove o gradiente, mantendo apenas a imagem
    cardBanner.style.backgroundSize = "100%";
    cardBanner.style.backgroundPosition = "center";
    cardBanner.style.scale = "1";
    cardP.style.marginBottom = "4rem";
}
*/

function onCategoryCard(card, p, url) {
    const cardBanner = document.getElementById(card);
    const cardP = document.getElementById(p);

    // Aumenta o zoom da imagem de fundo
    cardBanner.style.background = `radial-gradient(145% 160% at 0% 0%, transparent, #2880a6), url('imagens/${url}')`;
    cardBanner.style.backgroundSize = "120%";
    cardBanner.style.backgroundPosition = "center";
    cardBanner.style.transition = "all .2s ease-in-out"

    // Ajusta o texto
    cardP.style.transition = "all .2s ease-in-out"
    cardP.style.marginBottom = "2rem";
}

function offCategoryCard(card, p, url) {
    const cardBanner = document.getElementById(card);
    const cardP = document.getElementById(p);

    // Reduz o zoom da imagem de fundo
    cardBanner.style.background = `radial-gradient(115% 120% at 0% 0%, transparent, #2880a6), url('imagens/${url}')`;
    cardBanner.style.backgroundSize = "105%";
    cardBanner.style.backgroundPosition = "center";

    // Ajusta o texto
    cardP.style.transition = "all .2s ease-in-out"
    cardP.style.marginBottom = "4rem";
}


// Função para inicializar um carrossel específico
function initializeCarousel(carouselId, enableAutoPlay = false, autoPlayInterval = 5000, pauseOnHover = false) {
    // Seleciona os elementos específicos do carrossel
    const carouselElement = document.querySelector(`#${carouselId}`);
    const carouselContent = carouselElement.querySelector('.carousel-content');
    const items = carouselContent.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    let autoPlayTimer;

    // Função para mudar o conteúdo do carousel
    function changeItem() {
        currentIndex = (currentIndex + 1) % items.length; // Vai para o próximo item
        carouselContent.style.transform = `translateX(-${currentIndex * 100}%)`; // Move o conteúdo
    }

    // Funções de navegação manual (para os botões)
    const nextButton = carouselElement.querySelector('.next');
    const prevButton = carouselElement.querySelector('.prev');

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % items.length;
            carouselContent.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            carouselContent.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    }

    // Função de autoplay (se for ativada)
    function startAutoPlay() {
        autoPlayTimer = setInterval(changeItem, autoPlayInterval);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayTimer);
    }

    // Ativa o autoplay se necessário
    if (enableAutoPlay) {
        startAutoPlay();

        // Adiciona eventos de pausa e retomada se pauseOnHover estiver ativado
        if (pauseOnHover) {
            carouselElement.addEventListener('mouseover', stopAutoPlay);
            carouselElement.addEventListener('mouseout', startAutoPlay);
        }
    }
}

// Inicialize os carrosséis
initializeCarousel('carousel1', true, 5000, true); // Pausa ao passar o mouse
initializeCarousel('carousel2', false); // Não pausa ao passar o mouse
initializeCarousel('carousel3', true, 3000, false);
initializeCarousel('carousel4', true, 3000, false);
initializeCarousel('carousel5', true, 3000, false);
initializeCarousel('carousel6', true, 3000, false);
initializeCarousel('carousel7', true, 3000, false);
initializeCarousel('carousel8', false);

