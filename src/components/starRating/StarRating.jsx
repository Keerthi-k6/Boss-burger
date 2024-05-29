import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import styles from './StarRating.module.css';

const StarRating = ({ rating }) => {
  if (typeof rating !== 'number' || rating < 0 || rating > 5) {
    console.error(`Invalid rating value: ${rating}. Expected a number between 0 and 5.`);
    rating = 0;
  }

  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className={styles.starRating}>
      {Array(fullStars).fill().map((_, i) => (
        <FaStar key={i} />
      ))}
      {halfStar && <FaStarHalfAlt key={fullStars} />}
      {Array(emptyStars).fill().map((_, i) => (
        <FaRegStar key={i + fullStars + (halfStar ? 1 : 0)} />
      ))}
    </div>
  );
};

export default StarRating;
