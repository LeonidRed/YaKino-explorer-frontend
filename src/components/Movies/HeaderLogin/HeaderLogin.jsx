import './HeaderLogin.css';
import logo from '../../../images/header-logo.svg';
import { Link } from 'react-router-dom';
import BurgerMenu from '../../BurgerMenu/BurgerMenu';
import ProfileLogo from '../../ProfileLogo/ProfileLogo';

export default function HeaderLogin() {
  return (
    <header className="header-login">
      <div className="header-login__container">
        <Link to="/" className="header-login__main-link">
          <img className="header-login__logo" src={logo} alt="Логотип сайта" />
        </Link>

        <div className="header-login__movies-list">
          <Link to="/movies" className="header-login__movies-link header-login__movies-link-medium">Фильмы</Link>
          <Link to="/saved-movies" className="header-login__movies-link">Сохраненные фильмы</Link>
        </div>

        {/* пока нет логики, поэтому компонент ProfileLogo закоментирован */}
        {/* <ProfileLogo /> */}
        <Link to="/profile" className='header-login__profile'>
          <p className='header-login__account'>Аккаунт</p>
          <div className='header-login__account-icon'></div>
        </Link>

        <button className="header-login__burger" />

        {/* пока нет логики компонент BurgerMenu надо раскомментировать вручную */}
        {/* <BurgerMenu /> */}

      </div>
    </header>
  )
}