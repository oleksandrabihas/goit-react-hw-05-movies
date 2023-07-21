import { optionsSearch } from 'api/movies';
import axios from 'axios';
import FormSearchMovies from 'components/FormSearchMovies/FormSearchMovies';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const MoviesPage = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const getMovieBySearch = useCallback(async () => {
    const { data } = await axios.request(optionsSearch(query));
    setSearchedMovies(data.results);
  }, [query]);
  
  useEffect(() => {
    getMovieBySearch();
  }, [getMovieBySearch]);

  const handleSubmit = query => {
    const nextQuery = query !== '' ? { query } : {};
    setSearchParams(nextQuery);
  };
  return (
    <>
      <FormSearchMovies handleSubmit={handleSubmit} />
      <MoviesItem Movies={searchedMovies} />
    </>
  );
};
