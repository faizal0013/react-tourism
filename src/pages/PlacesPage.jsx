import { Container } from 'react-bootstrap';
import CardComponents from '../components/CardComponents/CardComponents';

import my_data from '../data/my-data.json';
import CardComponent from '../UI/CardComponent/CardComponent';

const PlacesPage = () => {
  return (
    <>
      <Container>
        <CardComponent>
          {my_data.map(data => (
            <CardComponents data={data} key={Math.random()} />
          ))}
        </CardComponent>
      </Container>
    </>
  );
};

export default PlacesPage;
