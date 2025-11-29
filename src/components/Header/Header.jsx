import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';
import Logo from '../Logo/Logo.jsx';

const Header = () => {
  return (
    <header className={css.header}>
      <Logo />

      <nav className={css.nav}>
        <NavLink className={css.link} to="/" end>
          Home
        </NavLink>
        <NavLink className={css.link} to="/teachers" end>
          Teachers
        </NavLink>
      </nav>

      <div className={css.authLinks}>
        <Link className={css.linkLogin} to="/auth/login">
          <svg width='20' height='20'>
            <use href='/src/assets/symbol-defs.svg#icon-log-in'></use>
          </svg>
          <p className={css.textLogin}>Log in</p>
        </Link>
  
        <Link className={css.linkLogin}to="/auth/register">
          <p className={css.textRegister}>Registration</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
