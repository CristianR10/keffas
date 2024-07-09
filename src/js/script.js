// Array de objetos contendo URLs das imagens e dos links dos produtos
const produtos = [
    { imagem: 'assets/img/pequeno.jpg', link: 'https://wa.me/c/5511917508141' },
    { imagem: 'assets/img/pequeno.jpg', link: 'https://wa.me/c/5511917508141' },
    { imagem: 'assets/img/pequeno.jpg', link: 'https://wa.me/c/5511917508141' },
    // Adicione mais produtos conforme necessário
];

// Seleciona o elemento swiper-wrapper
const swiperWrapper = document.querySelector('.swiper-wrapper');

// Itera sobre o array de produtos e cria os slides
produtos.forEach(produto => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';

    const link = document.createElement('a');
    link.href = produto.link;
    link.target = '_blank'; // Abre o link em uma nova aba

    const img = document.createElement('img');
    img.src = produto.imagem;

    link.appendChild(img);
    slide.appendChild(link);
    swiperWrapper.appendChild(slide);
});

// Inicializa o Swiper
const swiper = new Swiper('.swiper-container', {
    loop: false,
    centeredSlides: true,
    initialSlide: 1,
    slidesPerView: 2.2, // Mostra 2 imagens por vez
    spaceBetween: 10, // Espaço entre os slides, você pode ajustar conforme necessário
    navigation: false, // Remove as setas
    pagination: false, // Remove as bullets
});

const catalog = document.querySelector('.keffas-background__container--catalogo');

catalog.addEventListener('click', function () {
    // Verifica se a classe 'open' já está presente no elemento
    const isOpen = catalog.classList.contains('open');

    // Se 'isOpen' for true, remove a classe 'open'; se for false, adiciona a classe 'open'
    if (isOpen) {
        catalog.classList.remove('open');
    } else {
        catalog.classList.add('open');
    }
});


