import PageNotFound from '../../assets/images/404Page.jpg';

import style from './Page404.module.css';

const Page404 = () => {
  return (
    <>
      <img className={style.image__container} src={PageNotFound} alt="pagenotfound" />
    </>
  );
};

export default Page404;
