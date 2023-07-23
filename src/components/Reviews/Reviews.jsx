import { optionsReviews } from 'api/movies';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from './Reviews.styled';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const { movieId } = useParams();
  
  const getReviews = useCallback(async () => {
    setIsLoading(true)
    try {
      const {
        data: { results },
      } = await axios.request(optionsReviews(movieId));
      setReviews(results);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false)
    }
  }, [movieId]);

  useEffect(() => {
    getReviews();
  }, [getReviews]);

  return (
    <>
      {isLoading && <Loader/>}
      {reviews.length === 0 ? (<p>We don't have any reviews for this movie</p>) :
      (
      <ul>
        {reviews.map(review => {
          const { id, author, content } = review;
          return (
            <Review key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </Review>
          );
        })}
      </ul>
      )}
    </>
  );
};

export default Reviews;