import { useEffect, useState } from 'react';
import axios from 'axios';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import { optionsGetTrending } from 'api/movies';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
      (async () => {
        try {
          const { data } = await axios.request(optionsGetTrending);
          setTrendingMovies(data.results);
        } catch (error) {
          console.log(error);
        }
      })()
  }, []);

  return (
    <>
      <ul>
        <MoviesItem Movies={trendingMovies} />
      </ul>
    </>
  );
};
export default HomePage;
