import { optionsSearch } from 'api/movies';
import axios from 'axios';
import { FetchError } from 'components/FetchError/FetchError';
import FormSearchMovies from 'components/FormSearchMovies/FormSearchMovies';
import { Loader } from 'components/Loader/Loader';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getMovieBySearch = useCallback(async () => {
    setNotFound(false);
    setIsLoading(true);
    try {
      const { data } = await axios.request(optionsSearch(query));
      setSearchedMovies(data.results);
      if (data.results.length === 0) {
        setNotFound(true);
      }
    } catch (error) {
      console.log(error.message);
      setError(true);
      setSearchedMovies(null);
    } finally {
      setIsLoading(false);
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
      {error && <FetchError />}
      {isLoading && <Loader />}
      <ul>
        <MoviesItem Movies={searchedMovies} />
      </ul>
      {notFound && (
        <p>
          Sorry, we couldn't find any movie. <br />
          Please, try again.
        </p>
      )}
    </>
  );
};

export default MoviesPage;
