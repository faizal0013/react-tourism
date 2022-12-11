import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

import style from './StarReviews.module.css';

const StarReviews = ({ review }) => {
  return Array.from({ length: 5 }, (_, i) => {
    const number = i + 0.5;

    return (
      <span key={i}>
        {review >= i + 1 ? (
          <FaStar className={style.star_color} />
        ) : review >= number ? (
          <FaStarHalfAlt className={style.star_color} />
        ) : (
          <FaRegStar className={style.star_color} />
        )}
      </span>
    );
  });
};

export default StarReviews;
