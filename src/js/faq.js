document.addEventListener('DOMContentLoaded', () => {
  fetch('../data/faq.json')
    .then(response => response.json())
    .then(data => {
      const faqContainer = document.getElementById('faq-items');
      if (!faqContainer) {
        console.error('FAQ container not found!');
        return;
      }

      const faqHTML = data
        .map((item, index) => {
          const iconSrc = `../img/faq/${index === 0 ? 'close' : 'open'}@1x.png`;
          const iconSrcset = `../img/faq/${
            index === 0 ? 'close' : 'open'
          }@2x.png 2x`;
          const iconAlt = index === 0 ? 'Close icon' : 'Open icon';

          return `
            <div class="faq-item ${index === 0 ? 'open' : ''}">
              <button class="faq-question" type="button">
                <span class="faq-question-text">${item.question}</span>
                <img
                  class="faq-toggle-icon"
                  src="${iconSrc}"
                  srcset="${iconSrcset}"
                  alt="${iconAlt}"
                  width="40"
                  height="40"
                />
              </button>
              <div class="faq-answer">
                <p>${item.answer}</p>
              </div>
            </div>
          `;
        })
        .join('');

      faqContainer.innerHTML = faqHTML;

      const faqItems = document.querySelectorAll('.faq-item');

      faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        const toggleIcon = item.querySelector('.faq-toggle-icon');

        questionButton.addEventListener('click', () => {
          const isOpen = item.classList.contains('open');

          if (isOpen) {
            return;
          }

          faqItems.forEach(faq => {
            faq.classList.remove('open');
            const faqToggleIcon = faq.querySelector('.faq-toggle-icon');
            faqToggleIcon.src = '../img/faq/open@1x.png';
            faqToggleIcon.srcset = '../img/faq/open@2x.png 2x';
          });

          item.classList.add('open');
          toggleIcon.src = '../img/faq/close@1x.png';
          toggleIcon.srcset = '../img/faq/close@2x.png 2x';
        });
      });
    })
    .catch(error => {
      console.error('Error fetching FAQ data:', error);
    });
});
