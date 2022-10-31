import style from './Container.module.css';

const Container = ({ children }) => {
  return (
    <>
      <div className={style.container}>
        <div className={`shadow-lg p-3 mb-5 bg-body rounded ${style.container__login}`}>{children}</div>
      </div>
    </>
  );
};

export default Container;
