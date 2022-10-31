import SimpleImageSlider from 'react-simple-image-slider';

import my_data from '../../data/my-data.json';

const ImageSlider = () => {
  const images = my_data.slice(0, 6).map(data => require(`../../assets/images/${data.image}`));

  return (
    <>
      <SimpleImageSlider
        images={images}
        showBullets={true}
        width={1536}
        height={650}
        showNavs={true}
        autoPlay={true}
        loop={true}
      />
    </>
  );
};

export default ImageSlider;
