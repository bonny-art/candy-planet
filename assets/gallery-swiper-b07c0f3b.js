import{S as g}from"./vendor-3e9e69f4.js";const l=window.innerWidth<1440;fetch("../data/gallery.json").then(e=>e.json()).then(e=>{const s=document.getElementById("gallery-swiper-wrapper");let t="";e.forEach(i=>{const r=i.id.toString().padStart(2,"0");t+=`
        <div class="swiper-slide gallery-swiper-slide">
          <picture class="gallery-image">
            <source
              media="(min-width: 1440px)"
              srcset="
                ../img/gallery/img-${r}-desk@1x.jpg,
                ../img/gallery/img-${r}-desk@2x.jpg 2x
              "
            />
            <img
              src="../img/gallery/img-${r}-mob@1x.jpg"
              srcset="
                ../img/gallery/img-${r}-mob@1x.jpg,
                ../img/gallery/img-${r}-mob@2x.jpg 2x
              "
              alt="${i.alt}"
            />
          </picture>
        </div>
      `}),s.innerHTML=t;const a=l?.7954:.7665,o=l?-20:-45;new g(".gallery-swiper-container",{grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",loop:!0,navigation:{nextEl:".gallery-button-next",prevEl:".gallery-button-prev"},effect:"coverflow",coverflowEffect:{rotate:0,stretch:o,depth:0,modifier:1,scale:a,slideShadows:!1}})}).catch(e=>{console.error("Error fetching gallery data:",e)});
//# sourceMappingURL=gallery-swiper-b07c0f3b.js.map
