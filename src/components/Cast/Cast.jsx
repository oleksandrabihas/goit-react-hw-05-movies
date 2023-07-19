import { optionsCast } from 'api/movies';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  const getCast = useCallback(async () => {
    try {
      const {
        data: { cast },
      } = await axios.request(optionsCast(movieId));
      setCast(cast);
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  useEffect(() => {
    getCast();
  }, [getCast]);

  return (
    <ul>
      {cast.map(actor => {
          const { id, name, character, profile_path } = actor;
          const actor_poster = profile_path ? `https://image.tmdb.org/t/p/original/${profile_path}`: ''
        return (
          <li key={id}>
            <img width="80" src={actor_poster} alt={name} />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};
