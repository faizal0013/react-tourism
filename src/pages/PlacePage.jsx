import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

import my_data from '../data/my-data.json';
import Div from '../UI/Div/Div';

const PlacePage = () => {
  const [loading, setLoading] = useState(true);
  const [place, setPlace] = useState({});

  const { _id } = useParams();

  useEffect(() => {
    my_data.forEach(data => {
      if (data.id === Number(_id)) {
        setPlace(data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        return;
      }
    });
  }, [_id]);

  return (
    <>
      {loading ? (
        <Div>
          <FadeLoader color="#36d7b7" />
        </Div>
      ) : (
        <>
          <h1>{place.title}</h1>
          <img
            src={require(`../assets/images/${place.image}`)}
            alt=""
            style={{
              width: '100%',
            }}
          />
          <p>{place.state}</p>
          <p>{place.review}</p>
        </>
      )}
    </>
  );
};

export default PlacePage;
