import{S as g}from"./vendor-3e9e69f4.js";fetch("../data/reviews.json").then(e=>e.json()).then(e=>{const n=document.getElementById("reviews-swiper-wrapper");let s="";e.forEach((r,w)=>{let t="";for(let a=0;a<5;a+=1)t+=`
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
        `;const i=`cookie-${(w+1).toString().padStart(2,"0")}`;s+=`
        <div class="swiper-slide">
          <div class="reviews-card">
            <div class="reviews-review">
              <p class="reviews-review-text">${r.description}</p>
              <div class="reviews-stars-container">${t}</div>
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
                src="../img/reviews/${i}@1x.png"
                srcset="
                 ../img/reviews/${i}@1x.png 1x,
                 ../img/reviews/${i}@2x.png 2x
                "
                alt="Cartoon bread character wearing a chef's hat and red shoes."
              />${r.author}
            </p>
          </div>
        </div>
      `}),n.innerHTML=s,new g(".reviews-swiper-container",{breakpoints:{320:{slidesPerView:1,spaceBetween:24},1440:{slidesPerView:4,spaceBetween:40}},loop:!0})});
//# sourceMappingURL=reviews-swiper-86a0cb8c.js.map
