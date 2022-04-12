let totalSlides = document.querySelectorAll('.slider--item').length; // para saber a quantidade de sliders e guardar em uma variável
let currentSlide = 0; //variável de ambiente


// para deixar o slider dinamico e se adaptar com a quantidade de fotos, podemos adicionas fotos e ele vai alterar seu tamanho dinamicamente
document.querySelector('.slider--area').style.width = `calc(100vw * ${totalSlides})`;

// para deixar nosso passador dinamico vamos pegar a altura da div slider, ele vai se adaptar indepedente do monitor
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;  //clientHeight pega a altura, vimos na aula de dimensões

let prev = document.querySelectorAll('.slider--control')[0];
let next = document.querySelectorAll('.slider--control')[1]

function goPrev () {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}

function goNext () {
    currentSlide++;    
    // totalSlides -1 se trata do ultimo slider
    if(currentSlide > (totalSlides -1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin () {
    let slideWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * slideWidth); // a largura da tela do navegador
    document.querySelector('.slider--area').style.marginLeft = `-${newMargin}px`; //ATENÇÃO É marginLeft mesmo
}

next.addEventListener("click", goNext);
prev.addEventListener("click", goPrev);

setInterval(goNext, 5000);