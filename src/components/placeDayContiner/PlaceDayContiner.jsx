import { Container } from 'react-bootstrap';

import { BsArrowRightShort } from 'react-icons/bs';

import style from './PlaceDayContiner.module.css';

const PlaceDayContiner = ({ place }) => {
  return (
    <Container className="my-3 d-flex justify-content-evenly text-center">
      <div className={style.places__container}>
        <p className={style.places__p}>place :</p>
        <div className={style.places__container_differnt}>
          {place.days.map(day => {
            return (
              <span key={Math.random()} className={style.places__differnt}>
                <BsArrowRightShort />
                <p className={style.places__differnt_p}>{day.placeName}</p>
              </span>
            );
          })}
        </div>
      </div>
      <div className="border-end different__boder border-2"></div>
      <p className={style.dec__p}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores a in eaque maxime, optio, perspiciatis
        dignissimos modi nam eos vel quod, consectetur voluptas. Earum, modi deserunt quisquam debitis maxime est.
      </p>
    </Container>
  );
};

export default PlaceDayContiner;
