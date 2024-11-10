const slides = [
    { img: 'img/carrossel.png', alt: 'Slide 1' },
    { img: 'img/carrossel2.png', alt: 'Slide 2' },
    { img: 'img/carrossel3.png', alt: 'Slide 3' }
];

let slideIndex = 0;

function mostrarSlide(index) {
    const imagem = document.querySelector('.main__carousel-image'); 

    imagem.src = slides[index].img;
    imagem.alt = slides[index].alt;
}

function proximoSlide() {
    slideIndex = (slideIndex + 1) % slides.length; 
    mostrarSlide(slideIndex);
}

mostrarSlide(slideIndex);
setInterval(proximoSlide, 3000); 