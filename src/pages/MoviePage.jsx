import { optionsSearch } from 'api/movies';
import axios from 'axios';
import FormSearchMovies from 'components/FormSearchMovies/FormSearchMovies';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [notFound, setNotFound] = useState(false);

  const getMovieBySearch = useCallback(async () => {
    setNotFound(false);

    try {
      const { data } = await axios.request(optionsSearch(query));
      setSearchedMovies(data.results);
      if (data.results.length === 0) {
        setNotFound(true);
      }
    } catch (error) {
      setSearchedMovies(null);
    }
  }, [query]);

  useEffect(() => {
    if (!query) {
      return;
    }
    getMovieBySearch();
  }, [getMovieBySearch, query]);

  const handleSubmit = query => {
    const nextQuery = query !== '' ? { query } : {};
    setSearchParams(nextQuery);
  };

  return (
    <>
      <FormSearchMovies handleSubmit={handleSubmit} />
      <ul>
        <MoviesItem Movies={searchedMovies} />
      </ul>
      {notFound && (
        <div>
          Sorry, we couldn't find any movie. <br />
          Please, try again.
        </div>
      )}
    </>
  );
};

export default MoviesPage;
