import iziToast from 'izitoast';

import { gethPhotos } from './js/pixabay-api';
import { createGalleryElement } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';

import errorMessage from './img/error-massage.svg';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery-list');
const loaderBox = document.querySelector('.loader-box');

form.addEventListener('submit', onFormSubmit);

const simpleLightbox = new SimpleLightbox('.gallery-list a', {
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt',
  overlayOpacity: 1,
});

function onFormSubmit(e) {
  e.preventDefault();

  const searchInputValue = form.elements.search.value.trim();

  if (searchInputValue.trim() === '') {
    return;
  }

  loaderBox.classList.add('loader-box-active');

  gethPhotos(searchInputValue)
    .then(data => {
      loaderBox.classList.add('loader-box-active');
      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please, try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
          titleColor: '#fff',
          titleSize: '16px',
          titleLineHeight: '24px',
          messageColor: '#fff',
          messageSize: '16px',
          messageLineHeight: '24px',
          iconUrl: errorMessage,
          maxWidth: '385px',
          timeout: 5000,
        });
        gallery.innerHTML = '';
        form.reset();
        form.elements.search.focus();
        return;
      }
      const galleryCardsTemplate = data.hits
        .map(imgInfo => createGalleryElement(imgInfo))
        .join('');
      gallery.innerHTML = galleryCardsTemplate;
      simpleLightbox.refresh();
      form.reset();
      form.elements.search.focus();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      loaderBox.classList.remove('loader-box-active');
    });
}
