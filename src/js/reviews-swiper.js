import Swiper from 'swiper/bundle';
import '../../node_modules/swiper/swiper-bundle.min.css';

fetch('../data/reviews.json')
  .then(response => response.json())
  .then(data => {
    const swiperContainer = document.getElementById('reviews-swiper-wrapper');
    let swiperHTML = '';

    data.forEach((item, index) => {
      let ratingStarsHTML = '';
      for (let i = 0; i < 5; i += 1) {
        ratingStarsHTML += `
          <img
            width="24"
            height="24"
            src="../img/reviews/star@1x.png"
            srcset="
             ../img/reviews/star@1x.png 1x,
             ../img/reviews/star@2x.png 2x
            "
            alt="Rating star"
          />
        `;
      }

      const cookieIndex = index + 1;
      const cookieImageName = `cookie-${cookieIndex
        .toString()
        .padStart(2, '0')}`;

      swiperHTML += `
        <div class="swiper-slide">
          <div class="reviews-card">
            <div class="reviews-review">
              <p class="reviews-review-text">${item.description}</p>
              <div class="reviews-stars-container">${ratingStarsHTML}</div>
              <img
                class="reviews-triangle"
                width="24"
                height="12"
                src="./img/reviews/reviews-triangle@1x.png"
                srcset="
                 ../img/reviews/reviews-triangle@1x.png 1x,
                 ../img/reviews/reviews-triangle@2x.png 2x
                "
              />
            </div>
            <p class="reviews-review-user">
              <img
                src="../img/reviews/${cookieImageName}@1x.png"
                srcset="
                 ../img/reviews/${cookieImageName}@1x.png 1x,
                 ../img/reviews/${cookieImageName}@2x.png 2x
                "
                alt="Cartoon bread character wearing a chef's hat and red shoes."
              />${item.author}
            </p>
          </div>
        </div>
      `;
    });

    swiperContainer.innerHTML = swiperHTML;

    const swiper = new Swiper('.reviews-swiper-container', {
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
      loop: true,
    });
  });
