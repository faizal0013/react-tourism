import { Container } from 'react-bootstrap';

import { BiTrain } from 'react-icons/bi';
import { RiHotelFill, RiEarthFill } from 'react-icons/ri';

import style from './BrandContainer.module.css';

const BrandContainer = () => {
  return (
    <>
      <Container>
        <div className={style.container}>
          <div className={style.container_item}>
            <BiTrain size={60} />
            <p className="h1">Comfortable Journey</p>
            <p>A wonderful serenity has taken to the possession of my entire soul.</p>
          </div>
          <div className={style.container_item}>
            <RiHotelFill size={60} />
            <p className="h1">Luxuries Hotel</p>
            <p>A wonderful serenity has taken to the possession of my entire soul.</p>
          </div>
          <div className={style.container_item}>
            <RiEarthFill size={60} />
            <p className="h1">Travel Guide</p>
            <p>A wonderful serenity has taken to the possession of my entire soul.</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BrandContainer;
