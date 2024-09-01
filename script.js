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

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider-container1');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = document.querySelectorAll('.slide-card').length;
    let currentIndex = 0;
    let autoSlideInterval;

    function showSlide(index) {
        // Calculate the offset based on the current slide index
        const offset = index * 100;
        slider.style.transform = `translateX(-${offset}%)`;

        // Handle dots active state
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        // Move to the next slide, loop back to the start
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); // Slide every 5 seconds
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide(); // Stop auto sliding when a dot is clicked
            currentIndex = index;
            showSlide(currentIndex);
            startAutoSlide(); // Restart auto sliding
        });
    });

    // Initialize slider
    showSlide(currentIndex);
    startAutoSlide(); // Start auto sliding
});


const slider = document.getElementById('course-slider');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const cardsToShow = 7;
let currentIndex = 0;

function updateSliderPosition() {
    const cardWidth = slider.querySelector('.course-slide-card').offsetWidth;
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = Math.max(0, slider.children.length - cardsToShow);
    }
    updateSliderPosition();
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < slider.children.length - cardsToShow) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSliderPosition();
});

// Initialize the slider position
updateSliderPosition();


(function() {
    let currentIndex = 0;

    function showSlide(index) {
        const testimonialsWrapper = document.querySelector('.testimonials-wrapper');
        const dots = document.querySelectorAll('.slider-dots1 .dot1');
        const slideWidth = document.querySelector('.testimonial').offsetWidth + 20;
        
        // Handle slide index overflow
        if (index >= dots.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = dots.length - 1;
        } else {
            currentIndex = index;
        }

        // Scroll to the current slide
        testimonialsWrapper.scrollTo({
            left: currentIndex * slideWidth,
            behavior: 'smooth'
        });

        // Update the active dot
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // Function to handle dot click
    function currentSlide(index) {
        showSlide(index);
    }

    // Initialize the slider with the first slide
    showSlide(currentIndex);

    // Add event listeners to dots
    document.querySelectorAll('.dot1').forEach((dot, i) => {
        dot.addEventListener('click', () => currentSlide(i));
    });
})();
// Scroll to Top functionality
const scrollToTopButton = document.getElementById('scrollToTop');

window.onscroll = function() {
    if (window.pageYOffset > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
