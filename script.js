
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

document.getElementById('nextBtn').addEventListener('click', () => {
  goToSlide(currentSlide + 1);
});

document.getElementById('prevBtn').addEventListener('click', () => {
  goToSlide(currentSlide - 1);
});


function goToSlide(slideIndex) {
  if (slideIndex >= totalSlides) {
    currentSlide = 0;
  } else if (slideIndex < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = slideIndex;
  }
  updateCarousel();
}


function updateCarousel() {
  for (let i = 0; i < totalSlides; i++) {
    if (i === currentSlide) {
      slides[i].style.display = 'block';
    } else {
      slides[i].style.display = 'none';
    }
  }
}


updateCarousel();
