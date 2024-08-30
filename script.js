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


document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter-number');

    counters.forEach(counter => {
        const target = counter.getAttribute('data-target');
        
        if (counter.innerText !== '65m+') {
            const updateCounter = () => {
                const current = parseInt(counter.innerText.replace(/,/g, ''), 10) || 0;
                const increment = Math.ceil(target / 200);

                if (current < target) {
                    counter.innerText = formatNumber(current + increment);
                    setTimeout(updateCounter, 10);
                } else {
                    counter.innerText = formatNumber(target);
                }
            };

            const formatNumber = (num) => {
                return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            };

            updateCounter();
        }
    });
});
