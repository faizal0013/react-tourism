import { Link } from 'react-router-dom';

import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';

import style from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <footer className={style.footer_containter}>
        <div className={style.footer_item_containter}>
          <h1 className={style.footer_title}>Tourism</h1>
          <p>5th flora, 700/D kings road, green</p>
          <p>lane New York-1782</p>
          <p>+10 367 826 2567</p>
          <p>contact@carpenter.com</p>
          <div className={style.footer_social_icone_container}>
            <a href={'https://www.facebook.com'} target="_blank" rel="noreferrer">
              <BsFacebook />
            </a>
            <a href={'https://twitter.com/'} target="_blank" rel="noreferrer">
              <BsTwitter />
            </a>
            <a href={'https://www.instagram.com/'} target="_blank" rel="noreferrer">
              <BsInstagram />
            </a>
            <a href={'https://www.youtube.com/'} target="_blank" rel="noreferrer">
              <BsYoutube />
            </a>
          </div>
        </div>
        <div>
          <h1 className={style.footer_title}>Company</h1>
          <div className={style.footer_item_menu_containter}>
            <Link to="">home</Link>
            <Link to="contact">Contact</Link>
            <Link to="about">About</Link>
          </div>
        </div>
        <div>
          <h1 className={style.footer_title}>Popular destination </h1>
          <div className={style.footer_item_menu_containter}>
            <Link to="india">India</Link>
            <Link to="england">England</Link>
            <Link to="america">America</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
