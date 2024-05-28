// StarRating.jsx
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import styles from './StarRating.module.css';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className={styles.starRating}>
      {Array(fullStars).fill().map((_, i) => (
        <FaStar key={i} />
      ))}
      {halfStar && <FaStarHalfAlt />}
      {Array(emptyStars).fill().map((_, i) => (
        <FaRegStar key={i + fullStars + 1} />
      ))}
    </div>
  );
};

export default StarRating;
