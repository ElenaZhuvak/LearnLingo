import { Link } from "react-router-dom";
import css from './Logo.module.css';

const Logo = () => {
  return (
        <Link className={css.container} to="/">
            <div className={css.logo}>
                <svg width='28' height='28'>
                    <use href='/src/assets/symbol-defs.svg#icon-ukraine'></use>
                </svg>
                <p className={css.logoText}>LearnLingo</p>
            </div>
        </Link>
  );
};

export default Logo;