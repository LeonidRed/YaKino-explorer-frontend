import ProfileLogo from '../ProfileLogo/ProfileLogo';
import './BurgerMenu.css';
import { Link } from 'react-router-dom';

export default function BurgerMenu() {
  return (
    <article className="burger-menu">
      <div className="burger-menu__container">

        <div className="burger-menu__links">
          <Link to="/" className="burger-menu__link burger-menu__main-link">
            Главная
          </Link>
          <Link to="/movies" className="burger-menu__link burger-menu__link-active">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="burger-menu__link">
            Сохраненные фильмы
          </Link>
        </div>

        <ProfileLogo />

        <button className="burger-menu__close-btn"></button>
      </div>
    </article>
  )
}