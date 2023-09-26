import './HeaderLogin.css';
import logo from '../../../images/header-logo.svg';
import { Link, useLocation } from 'react-router-dom';
import BurgerMenu from '../../BurgerMenu/BurgerMenu';
import React from 'react';


export default function HeaderLogin(props) {
  const [isMainPage, setMainPage] = React.useState();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);

  const { pathname } = useLocation()

  React.useEffect(() => {
    if (pathname.includes('o')) {
      return setMainPage(false)
    } else {
      return setMainPage(true)
    }
  }, [isMainPage])


  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(true)
  }

  function closeBurgerMenu() {
    setIsBurgerMenuOpen(false)
  }

  return (
    <header className={`header-login ${isMainPage ? 'header-login-is-logged' : ''}`} >
      <div className="header-login__container">
        <Link to="/" className="header-login__main-link">
          <img className="header-login__logo" src={logo} alt="Логотип сайта" />
        </Link>

        <div className="header-login__movies-list">
          {(() => {
            if (pathname === '/movies') {
              return (
                <Link to="/movies"
                  className={`header-login__movies-link header-login__movies-link-medium ${isMainPage ? 'header-login__movies-link-is-logged' : ''}`}
                >
                  Фильмы
                </Link>
              )
            } else {
              return (
                <Link to="/movies"
                  className={`header-login__movies-link header-login__movies-link ${isMainPage ? 'header-login__movies-link-is-logged' : ''}`}
                >
                  Фильмы
                </Link>
              )
            }
          })()}

          {(() => {
            if (pathname === '/saved-movies') {
              return (
                <Link to="/movies"
                  className={`header-login__movies-link header-login__movies-link-medium ${isMainPage ? 'header-login__movies-link-is-logged' : ''}`}
                >
                  Сохраненные фильмы
                </Link>
              )
            } else {
              return (
                <Link to="/saved-movies"
                  className={`header-login__movies-link header-login__movies-link ${isMainPage ? 'header-login__movies-link-is-logged' : ''}`}
                >
                  Сохраненные фильмы
                </Link>
              )
            }
          })()}

        </div>

        <Link to="/profile"
          className={`header-login__profile ${isMainPage ? 'header-login__profile-is-logged' : ''}`}
        >
          <p className='header-login__account'>Аккаунт</p>
          <div className='header-login__account-icon'></div>
        </Link>

        <button
          className={`header-login__burger ${isMainPage ? 'header-login__burger-is-logged' : ''}`}
          type="button"
          onClick={handleBurgerMenuClick}
        />

        <BurgerMenu
          isOpen={isBurgerMenuOpen}
          onClose={closeBurgerMenu}
        />

      </div>
    </header >
  )
}