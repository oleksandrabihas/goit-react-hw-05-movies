import { optionsGetDetails } from 'api/movies';
import axios from 'axios';
import { Genres } from 'components/Genres/Genres';
import { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  const BackToPrevPage = useRef(location.state?.from ?? '/');

  const getDetails = useCallback(async () => {
    try {
      const { data } = await axios.request(optionsGetDetails(movieId));
      setMovieData(data);
    } catch (error) {
      console.log(error.message);
    } 
  }, [movieId]);

  useEffect(() => {
    getDetails();
  }, [getDetails]);

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieData;

  const date = new Date(release_date);
  const release_year = date?.getFullYear();

  const vote = Math.round(vote_average * 10);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/original/${poster_path}`
    : defaultImg;

if (!Object.keys(movieData).length) {
  return <div>Loading...</div>;
}

  return (
    <div>
      <Link to={BackToPrevPage.current}>Go back</Link>
      <div className="container-details">
        <div>
          <img loading="lazy" src={poster} width={350} alt={original_title} />
        </div>
        <div>
          <h1>
            {original_title}
            <span>({release_year})</span>
          </h1>
          <p>User score: {vote}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <Genres genres={genres} />
        </div>
      </div>
      <h2>Additional information</h2>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
