const ACCESS_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDk1OTYzNjJlMzI0NzAyZWNjOTFjNGZlMmRiZWUyZCIsInN1YiI6IjY0ODE4NGEyZDJiMjA5MDBhZDNhZDIyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2NfqXFUu6Bu9TfKlR-ML2346sf6pL6vFGjUN74YPvxg';
const BASE_URL = 'https://api.themoviedb.org/3';

export const optionsGetTrending = {
  method: 'GET',
  url: `${BASE_URL}/trending/movie/day`,
  params: { language: 'en-US', page: '1' },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_KEY}`,
  },
};

export const optionsGetDetails = movie_id => {
  return {
    method: 'GET',
    url: `${BASE_URL}/movie/${movie_id}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_KEY}`,
    },
  };
};

export const optionsCast = movieId => {
  return {
    method: 'GET',
    url: `${BASE_URL}/movie/${movieId}/credits`,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_KEY}`,
    },
  };
};

export const optionsReviews = movieId => {
  return {
    method: 'GET',
    url: `${BASE_URL}/movie/${movieId}/reviews`,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_KEY}`,
    },
  };
};
