import { Card } from 'react-bootstrap';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import style from './CardComponents.module.css';

const CardComponents = ({ data }) => {
  return (
    <>
      <Card className={style.card_item_container}>
        <Link to={`place/${data.id}`}>
          <Card.Img
            variant="top"
            src={require(`../../assets/images/${data.image}`)}
            alt={data.image}
            className={style.card_item_image}
          />
        </Link>
        <Card.Body>
          <Link to={`/place/${data.id}`}>
            <Card.Title>{data.title}</Card.Title>
          </Link>
          <Card.Text className="text-secondary">{data.state}</Card.Text>
          <Card.Text className="text-secondary">{data.days}</Card.Text>
          <Card.Text className="align-middle" as="div">
            <div className={style.card_item_review_container}>
              <div className={style.card_item_review}>
                <FaStar
                  style={{
                    color: '#FDCC0D',
                  }}
                />
                <FaStar
                  style={{
                    color: '#FDCC0D',
                  }}
                />
                <FaStar
                  style={{
                    color: '#FDCC0D',
                  }}
                />
                <FaStarHalfAlt
                  style={{
                    color: '#FDCC0D',
                  }}
                />
                <FaRegStar
                  style={{
                    color: '#FDCC0D',
                  }}
                />
              </div>
              <div className={style.card_item_review}>({data.review} Review)</div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardComponents;
