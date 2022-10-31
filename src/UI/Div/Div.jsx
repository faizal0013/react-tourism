import style from './Div.module.css';

const Div = ({ children }) => <div className={style.container}>{children}</div>;

export default Div;
