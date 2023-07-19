import { useCallback, useEffect, useState } from 'react';
import { optionsGetTrending } from '../../api/movies';
import axios from 'axios';
import { TrendingItem } from 'components/TrendingItem/TrendingItem';

export const TrendingList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const getTrending = useCallback(async () => {
    try {
      const { data } = await axios.request(optionsGetTrending);
      setTrendingMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getTrending();
  }, [getTrending]);
  
  return (
    <>
      <ul>
        <TrendingItem trendingMovies={trendingMovies} />
      </ul>
    </>
  );
};
