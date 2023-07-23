import { useEffect, useState } from 'react';
import axios from 'axios';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import { optionsGetTrending } from 'api/movies';
import { Title } from './HomePage.styled';
import { FetchError } from 'components/FetchError/FetchError';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.request(optionsGetTrending);
        setTrendingMovies(data.results);
      } catch (error) {
        setError(true);
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      {error && <FetchError/>}
      <ul>
        <MoviesItem Movies={trendingMovies} />
      </ul>
    </>
  );
};
export default HomePage;
