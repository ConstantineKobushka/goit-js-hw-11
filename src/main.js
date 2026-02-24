import iziToast from 'izitoast';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

import { getImagesByQuery } from './js/pixabay-api';

import iziToastErrorIcon from './img/izitoast-error-icon.svg';

const galleryFormEl = document.querySelector('.gallery-form');
const galleryEl = document.querySelector('.gallery-list');
const galleryLoaderEl = document.querySelector('.gallery-loader');

galleryFormEl.addEventListener('submit', onGalleryFormSubmit);

function onGalleryFormSubmit(event) {
  event.preventDefault();

  const searchValue = event.target.elements.search.value.trim();

  if (searchValue === '') {
    showErrorToast(
      'The input field cannot be empty. Please enter a search keyword.'
    );
    return;
  }

  clearGallery(galleryEl);
  showLoader(galleryLoaderEl);

  getImagesByQuery(searchValue)
    .then(({ data }) => {
      if (data.hits.length === 0) {
        showErrorToast(
          'Sorry, there are no images matching your search query. Please, try again!'
        );
        return;
      }

      createGallery(data.hits, galleryEl);
    })
    .catch(error => {
      console.log(error.message);
    })
    .finally(() => {
      hideLoader(galleryLoaderEl);
      galleryFormEl.reset();
      galleryFormEl.elements.search.focus();
    });
}

export function showErrorToast(message) {
  iziToast.error({
    title: 'Error',
    titleColor: '#ffffff',
    message,
    messageColor: '#ffffff',
    maxWidth: '385px',
    iconUrl: iziToastErrorIcon,
    position: 'topRight',
    closeOnEscape: true,
    backgroundColor: '#ef4040',
    progressBarColor: '#b51b1b',
    timeout: 3000,
  });
}
