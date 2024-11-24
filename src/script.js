function onBanner(bannerPrincipal, img_id) {
    const banner = document.getElementById(bannerPrincipal);
    const img = document.getElementById(img_id);

    // Cancela qualquer timeout pendente para evitar transições prematuras
    clearTimeout(bannerTimeout);

    banner.style.opacity = "0";
    const imagemNova = img.src;

    setTimeout(() => {
        banner.src = `${imagemNova}`; // Altere para a nova imagem
        banner.onload = () => {
            banner.style.opacity = '1'; // Restaura a opacidade
        }
    }, 250); // Tempo deve coincidir com o tempo definido na transição (0.5s = 500ms)
}

function offBanner(bannerPrincipal) {
    const banner = document.getElementById(bannerPrincipal);

    bannerTimeout = setTimeout(() => {
        banner.style.opacity = "0";
        const imagemNova = `${bannerPrincipal}.jpg`;

        setTimeout(() => {
            banner.src = `imagens/${imagemNova}`; // Altere para a nova imagem
            banner.onload = () => {
                banner.style.opacity = '1'; // Restaura a opacidade
            };
        }, 250); // Tempo deve coincidir com o tempo definido na transição
    }, 500); // Tempo adicional antes de voltar à imagem original (1 segundo)
}


function onMouseOver(infoid) {
    const infoBanner = document.getElementById(infoid);
    infoBanner.style.zIndex = "10";
    infoBanner.style.opacity = "1";
    infoBanner.style.transition = "all 0.5s ease-in";
}

function onMouseOut(infoid) {
    const infoBanner = document.getElementById(infoid);
    infoBanner.style.zIndex = "0";
    infoBanner.style.opacity = "0";
    infoBanner.style.transition = "all 0.5s ease-out";
}

function onCategoryCard(card, p, url) {
    const cardBanner = document.getElementById(card);
    const cardP = document.getElementById(p);

    // Aumenta o zoom da imagem de fundo
    cardBanner.style.background = `radial-gradient(145% 160% at 0% 0%, transparent, #2880a6), url('imagens/${url}')`;
    cardBanner.style.backgroundSize = "120%";
    cardBanner.style.backgroundPosition = "center";
    cardBanner.style.transition = "all .2s ease-in-out";

    // Ajusta o texto
    cardP.style.transition = "all .2s ease-in-out";
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
initializeCarousel('carousel9', true, 3000, false);
initializeCarousel('carousel10', true, 3000, false);
initializeCarousel('carousel11', true, 3000, false);
initializeCarousel('carousel12', true, 3000, false);
initializeCarousel('carousel13', true, 3000, false);

