let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % document.querySelectorAll('.slide').length;
    showSlides();
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + document.querySelectorAll('.slide').length) % document.querySelectorAll('.slide').length;
    showSlides();
}
