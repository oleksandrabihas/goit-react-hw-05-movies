import { optionsGetDetails } from 'api/movies';
import axios from 'axios';
import { animateScroll as scroll } from 'react-scroll';
import { Genres } from 'components/Genres/Genres';
import { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  LinkGoBack,
  MovieAdditionalInfo,
  MovieInfo,
  PosterContainer,
  SectionContainer,
  StyledLink,
} from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';

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
      alert('Sorry, something went wrong... Please, try again later.');
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
  
  const scrollTo = () => {
    scroll.scrollTo(200);
  }

  if (!Object.keys(movieData).length) {
    return <Loader />;
  }
  return (
    <>
      <LinkGoBack to={BackToPrevPage.current}>Go back</LinkGoBack>
      <SectionContainer>
        <PosterContainer>
          <img loading="lazy" src={poster} width={280} alt={original_title} />
        </PosterContainer>
        <MovieInfo>
          <h2>
            {original_title}
            <span>({release_year})</span>
          </h2>
          <p>User score: {vote}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <Genres genres={genres} />
        </MovieInfo>
      </SectionContainer>
      <MovieAdditionalInfo>Additional information</MovieAdditionalInfo>
      <StyledLink onClick={scrollTo} className="smooth-scroll-button" to="cast">
        Cast
      </StyledLink>
      <StyledLink onClick={scrollTo} className="smooth-scroll-button" to="reviews">
        Reviews
      </StyledLink>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
