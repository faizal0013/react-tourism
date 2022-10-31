import BrandContainer from '../components/BrandContainer/BrandContainer';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import PopularDestination from '../components/PopularDestination/PopularDestination';
import PopularPlaces from '../components/PopularPlaces/PopularPlaces';

const HomePage = () => {
  return (
    <>
      <ImageSlider />
      <PopularDestination />
      <PopularPlaces />
      <BrandContainer />
    </>
  );
};

export default HomePage;
