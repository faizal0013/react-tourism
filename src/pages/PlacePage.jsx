import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

import my_data from '../data/my-data.json';
import Div from '../UI/Div/Div';

import PlaceComponents from '../components/placeComponents/PlaceComponents';

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
        <PlaceComponents place={place} />
      )}
    </>
  );
};

export default PlacePage;
