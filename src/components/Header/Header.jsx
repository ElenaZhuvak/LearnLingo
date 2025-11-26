import { NavLink } from 'react-router-dom';
import Auth from '../Auth/Auth.jsx';
import css from './Header.module.css';

const Header = () => {
  return (
    <header>
        <NavLink to="/" end>
        logo
        </NavLink>
      <nav className={css.nav}>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/teachers" end>
          Teachers
        </NavLink>
      </nav>

      <Auth />
    </header>
  );
};

export default Header;
