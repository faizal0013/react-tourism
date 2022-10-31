import style from './CardComponent.module.css';

const CardComponent = ({ children }) => <div className={style.card_container}>{children}</div>;

export default CardComponent;
