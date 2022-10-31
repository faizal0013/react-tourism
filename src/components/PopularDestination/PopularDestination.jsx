import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import style from './PopularDestination.module.css';

import my_data from '../../data/my-data.json';

const PopularDestination = () => {
  return (
    <>
      <Container>
        <div className={style.containers}>
          <h1 className={style.title_container_center}>Popular Destination</h1>
          <p className={style.paragraph_container_center}>
            Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon
            beard words.
          </p>
        </div>
        <div className={style.popular__image__container}>
          {my_data.slice(0, 6).map(data => (
            <div key={data.id} className={style.popular__image_section}>
              <Image
                src={require(`../../assets/images/${data.image}`)}
                alt={data.image}
                className={style.popular__image}
              />
              <Link to={`place/${data.id}`}>
                <p className={style.popular__image_title}>{data.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default PopularDestination;
