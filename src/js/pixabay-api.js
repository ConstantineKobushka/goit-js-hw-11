import axios from 'axios';

const pixabayInstance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '39461522-3585b4ffe1c253549e3ec0e9b',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
});

export const getImagesByQuery = query => {
  const data = pixabayInstance.get('/', { params: { q: query } });
  return data;
};

// ! Method with fetch and URLSearchParams
// const BASE_URL = 'https://pixabay.com/api/';

// export const getImagesByQuery = query => {
//   const options = new URLSearchParams({
//     key: '39461522-3585b4ffe1c253549e3ec0e9b',
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   });

//   return fetch(`${BASE_URL}?${options}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// };
