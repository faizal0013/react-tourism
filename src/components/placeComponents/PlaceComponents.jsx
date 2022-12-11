import { Container } from 'react-bootstrap';

import style from './PlaceComponents.module.css';

import PlaceDayContiner from '../placeDayContiner/PlaceDayContiner';

const PlaceComponents = ({ place }) => {
  return (
    <>
      <h1 className={style.title__container}>{place.title}</h1>
      <Container>
        <img
          src={require(`../../assets/images/${place.image}`)}
          alt=""
          style={{
            width: '100%',
          }}
          className={style.image__container}
        />
      </Container>
      <PlaceDayContiner place={place} />
    </>
  );
};

export default PlaceComponents;
