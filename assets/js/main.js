const sliderTrack = document.querySelector('.slide-track');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dots button');
let currentSlide = 0;

function goToSlide(index) {
  if (!sliderTrack) return;
  currentSlide = index % slides.length;
  sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
}

setInterval(() => goToSlide(currentSlide + 1), 4200);

dots.forEach((dot, i) => dot.addEventListener('click', () => goToSlide(i)));

goToSlide(0);

// text ticker duplication for smooth loop
const marquee = document.querySelector('.marquee-track');
if (marquee) {
  marquee.innerHTML += marquee.innerHTML;
}

// smooth scroll to hero CTA
const exploreBtn = document.querySelector('#explore');
if (exploreBtn) {
  exploreBtn.addEventListener('click', () => {
    const target = document.querySelector('#destinations');
    target?.scrollIntoView({ behavior: 'smooth' });
  });
}

// simple on-page filter buttons (secondary pages)
const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
filters.forEach((btn) => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-filter');
    filters.forEach((b) => b.classList.toggle('active', b === btn));
    cards.forEach((card) => {
      card.style.display = category === 'all' || card.dataset.category === category ? 'grid' : 'none';
    });
  });
});

// detail page image carousel
const detailTrack = document.querySelector('.detail-track');
const detailSlides = document.querySelectorAll('.detail-slide');
let detailIndex = 0;

function rotateDetail() {
  if (!detailTrack || detailSlides.length === 0) return;
  detailIndex = (detailIndex + 1) % detailSlides.length;
  detailTrack.style.transform = `translateX(-${detailIndex * 100}%)`;
}

if (detailTrack) {
  setInterval(rotateDetail, 4800);
}
