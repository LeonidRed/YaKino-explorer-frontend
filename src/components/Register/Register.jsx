import './Register.css'
import logo from '../../images/header-logo.svg'
import { Link } from 'react-router-dom';


export default function Register() {
  return (
    <main className="register">
      {/* <section className="register"> */}
      <div className="register__container">
        <Link to="/" className="register__main-link">
          <img className="register__logo" src={logo} alt="Логотип сайта" />
        </Link>
        <h1 className="register__header">Добро пожаловать!</h1>

        <form className="register__form">
          <label className="register__label">Имя</label>
          <input className="register__input" id="input-name" name="name" type="text" required defaultValue="Виталий" placeholder="Введите имя" minLength="2" maxLength="30" />

          <label className="register__label">E-mail</label>
          <input className="register__input" id="input-email" name="email" type="email" required defaultValue="pochta@yandex.ru" placeholder='Введите почту' />

          <label className="register__label">Пароль</label>
          <input className="register__input" id="input-pass" name="pass" type="text" required defaultValue="••••••••••••••" placeholder='Введите пароль' minLength="8" />
          <span className="register__input-error input-pass-error">Что-то пошло не так...</span>
          <button className="register__button" type="submit">Зарегистрироваться</button>
        </form>

        <p className="register__text">Уже зарегистрированы?
          <Link to="/signin" className="register__link" >Войти</Link> </p>
      </div>
      {/*  </section> */}
    </main>
  );
};