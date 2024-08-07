import Swiper from 'swiper/bundle';
import '../../node_modules/swiper/swiper-bundle.min.css';

const isMobile = window.innerWidth < 1440;

fetch('../data/gallery.json')
  .then(response => response.json())
  .then(data => {
    const swiperContainer = document.getElementById('gallery-swiper-wrapper');
    let swiperHTML = '';

    data.forEach(item => {
      const slideIndex = item.id.toString().padStart(2, '0');

      swiperHTML += `
        <div class="swiper-slide gallery-swiper-slide">
          <picture class="gallery-image">
            <source
              media="(min-width: 1440px)"
              srcset="
                ../img/gallery/img-${slideIndex}-desk@1x.jpg,
                ../img/gallery/img-${slideIndex}-desk@2x.jpg 2x
              "
            />
            <img
              src="../img/gallery/img-${slideIndex}-mob@1x.jpg"
              srcset="
                ../img/gallery/img-${slideIndex}-mob@1x.jpg,
                ../img/gallery/img-${slideIndex}-mob@2x.jpg 2x
              "
              alt="${item.alt}"
            />
          </picture>
        </div>
      `;
    });

    swiperContainer.innerHTML = swiperHTML;

    const scale = isMobile ? 0.7954 : 0.7665;
    const stretch = isMobile ? -20 : -45;

    const swiper = new Swiper('.gallery-swiper-container', {
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      navigation: {
        nextEl: '.gallery-button-next',
        prevEl: '.gallery-button-prev',
      },

      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: stretch,
        depth: 0,
        modifier: 1,
        scale: scale,
        slideShadows: false,
      },
    });
  })
  .catch(error => {
    console.error('Error fetching gallery data:', error);
  });
