import { Button, Container } from 'react-bootstrap';

import style from './PopularPlaces.module.css';

import CardComponents from '../CardComponents/CardComponents';
import CardComponent from '../../UI/CardComponent/CardComponent';

import my_data from '../../data/my-data.json';

const PopularPlaces = () => {
  return (
    <>
      <Container>
        <div className={style.containers}>
          <h1 className={style.title_container_center}>Popular Places</h1>
          <p className={style.paragraph_container_center}>
            Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon
            beard words.
          </p>
        </div>
        <CardComponent>
          {my_data.slice(0, 6).map(data => (
            <CardComponents data={data} key={data.id} />
          ))}
        </CardComponent>
        <div className="text-center mb-5">
          <Button variant="danger" className={style.btn__more_places} href="places">
            More Places
          </Button>
        </div>
      </Container>
    </>
  );
};

export default PopularPlaces;
