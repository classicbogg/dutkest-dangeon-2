document.addEventListener('DOMContentLoaded', () => {

  const artImages = document.querySelectorAll('.art-card img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = lightbox.querySelector('.lightbox__image');
  const lightboxCaption = lightbox.querySelector('.lightbox__caption');

 
  artImages.forEach(img => {
    img.addEventListener('click', () => {
 
      const src = img.getAttribute('src');
      const alt = img.getAttribute('alt') || '';

      const figure = img.closest('figure');
      let captionText = alt;
      if (figure) {
        const figcaption = figure.querySelector('figcaption');
        if (figcaption) {
          captionText = figcaption.textContent.trim();
        }
      }

      lightboxImage.src = src;
      lightboxImage.alt = alt;
      lightboxCaption.textContent = captionText;
      lightbox.classList.add('is-visible');
    });
  });

  
  lightbox.addEventListener('click', event => {
      if (event.target === lightbox) {
      lightbox.classList.remove('is-visible');
    }
  });

  
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      lightbox.classList.remove('is-visible');
    }
  });

  const shuffleButton = document.getElementById('shuffle-button');

  if (shuffleButton) {
    shuffleButton.addEventListener('click', () => {
      console.log('Перемешать нажато!');
      
      const grid = document.querySelector('.art-grid');
      const cards = document.querySelectorAll('.art-card')
      
      console.log('Контейнер', grid)
      console.log('Карточек всего:', cards.length);
      
      const cardsArray = Array.from(cards);

      cardsArray.sort(() => Math.random() -0.5);
    
    cardsArray.forEach(card => {
    grid.appendChild(card);
    });
      });
  }
});

