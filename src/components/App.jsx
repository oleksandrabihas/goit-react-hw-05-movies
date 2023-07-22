import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from './Layout/Layout';
import { ErrorPage } from 'pages/ErrorPage';
const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviePage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(()=>import('./Reviews/Reviews'))
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails').then(module => ({ ...module, default: module.MovieDetails })));

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>

  );
};
