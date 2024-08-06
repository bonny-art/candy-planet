import './js/header';
// import './js/reviews-swiper';
// import './js/gallery-swiper';
// import './js/faq';

if (document.getElementById('reviews-swiper-wrapper')) {
  import('./js/reviews-swiper');
}

if (document.getElementById('gallery-swiper-wrapper')) {
  import('./js/gallery-swiper');
}

if (document.getElementById('faq-items')) {
  import('./js/faq');
}
