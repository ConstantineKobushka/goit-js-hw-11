const BASE_URL = 'https://pixabay.com/api/?';

export const gethPhotos = searchValue => {
  const options = new URLSearchParams({
    key: '39461522-3585b4ffe1c253549e3ec0e9b',
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}${options}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
