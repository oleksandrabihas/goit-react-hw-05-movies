import { optionsReviews } from 'api/movies';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const getReviews = useCallback(async () => {
    try {
      const {
        data: { results },
      } = await axios.request(optionsReviews(movieId));
      setReviews(results);
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  useEffect(() => {
    getReviews();
  }, [getReviews]);

  return reviews.length === 0 ? (
    <p>We don't have any reviews for this movie</p>
  ) : (
    <ul>
      {reviews.map(review => {
        const { id, author, content } = review;
        return (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};
