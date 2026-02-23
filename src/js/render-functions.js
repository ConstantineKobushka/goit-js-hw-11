import SimpleLightbox from 'simplelightbox';

const simpleLightbox = new SimpleLightbox('.gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  overlayOpacity: 1,
});

const createGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) => {
  return `
  <li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img class="gallery-img"
      src="${webformatURL}"
      alt="${tags}"
      loading="lazy" />
    </a>
    <ul class="gallery-info">
      <li class="gallery-info-item">
        <p class="gallery-info-title">Likes</p>
        <p class="gallery-info-text">${likes}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Views</p>
        <p class="gallery-info-text">${views}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Comments</p>
        <p class="gallery-info-text">${comments}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Downloads</p>
        <p class="gallery-info-text">${downloads}</p>
      </li>
    </ul>
  </li>
  `;
};

export const createGallery = (images, container) => {
  const markup = images.map(createGalleryItem).join('');
  container.innerHTML = markup;
  simpleLightbox.refresh();
};

export const clearGallery = container => {
  container.innerHTML = '';
};

export const showLoader = container => {
  container.classList.add('active');
};

export const hideLoader = container => {
  container.classList.remove('active');
};
