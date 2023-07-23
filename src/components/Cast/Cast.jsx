import { optionsCast } from 'api/movies';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActorName, ActorPoster, CastList, Character, ImageThumb } from './Cast.styled';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  const getCast = useCallback(async () => {
    try {
      const {
        data: { cast },
      } = await axios.request(optionsCast(movieId));
      setCast(cast);
    } catch (error) {
      console.log(error.message);
    }
  }, [movieId]);

  useEffect(() => {
    getCast();
  }, [getCast]);

   const defaultImg =
     'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  
      if (!Object.keys(cast).length) {
        return <Loader />;
      }
  return (
    <CastList>
      {cast.map(actor => {
        const { id, name, character, profile_path } = actor;
        const actor_poster = profile_path
          ? `https://image.tmdb.org/t/p/original/${profile_path}`
          : defaultImg;
        return (
          <li key={id}>
            <ImageThumb>
              <ActorPoster width="120" src={actor_poster} alt={name} />
            </ImageThumb>
            <ActorName>{name}</ActorName>
            <Character>
              Character: <span>{character}</span>
            </Character>
          </li>
        );
      })}
    </CastList>
  );
};
export default Cast;
