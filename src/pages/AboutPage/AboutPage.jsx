import { Container } from 'react-bootstrap';
import BrandContainer from '../../components/BrandContainer/BrandContainer';

import aboutUsImage from '../../assets/images/about-us.jpeg';

import style from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <>
      <div className={style.image_container}>
        <img src={aboutUsImage} alt="about" className={style.about_image} />
        <h3 className={style.image_container_heading}>About Us</h3>
      </div>
      <Container>
        <h1 className={style.about_heading}>Heading</h1>
        <p className={style.about_paragraph}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, culpa nam id minus, animi saepe sint iusto
          nemo dolorem debitis numquam minima magnam ut quasi ab maiores corrupti, fugit recusandae. Temporibus
          consequatur atque ad, dolore nisi saepe facere cumque nam at. Amet magnam ullam fuga odio placeat maiores
          perspiciatis totam hic error, aliquid illo, iusto doloremque vel nulla a labore. Minus aliquid hic, veritatis
          optio provident nesciunt cumque, fugit velit perferendis totam sint earum consequatur laborum exercitationem,
          error expedita reiciendis voluptate eius doloremque quia mollitia! Iste a sit quod suscipit? Consectetur
          laboriosam voluptate, quas aut quo, minima asperiores fuga perferendis tenetur eum qui mollitia, fugiat
          itaque. Est nisi reprehenderit error expedita cupiditate, autem quam officia vel id nesciunt sint laboriosam!
          Illum reprehenderit beatae voluptate, fugiat accusantium perspiciatis repellendus quae impedit consequatur
          saepe odit nemo error est blanditiis. Officia minus voluptates non corporis nam mollitia pariatur, similique
          eius, vero laudantium accusantium.
        </p>
      </Container>
      <BrandContainer />
    </>
  );
};

export default AboutPage;
