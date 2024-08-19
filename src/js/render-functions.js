export const createGalleryElement = galleryElementInfo => {
  return `
  <li class="gallery-item">
    <a class="gallery-link" href="${galleryElementInfo.largeImageURL}">
      <img class="gallery-img"
      src="${galleryElementInfo.webformatURL}"
      alt="${galleryElementInfo.tags}"
      loading="lazy" />
    </a>
    <ul class="gallery-info">
      <li class="gallery-info-item">
        <p class="gallery-info-title">Likes</p>
        <p class="gallery-info-text">${galleryElementInfo.likes}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Views</p>
        <p class="gallery-info-text">${galleryElementInfo.views}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Comments</p>
        <p class="gallery-info-text">${galleryElementInfo.comments}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Downloads</p>
        <p class="gallery-info-text">${galleryElementInfo.downloads}</p>
      </li>
    </ul>
  </li>
  `;
};
