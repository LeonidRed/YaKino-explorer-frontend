import './Login.css'
import logo from '../../images/header-logo.svg'
import { Link } from 'react-router-dom';


export default function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <img className="login__logo" src={logo} alt="Логотип сайта" />
        <h1 className="login__header">Рады видеть!</h1>
        <form className="login__form">
          <label className="login__label">E-mail</label>
          <input className="login__input" id="input-email" name="email" type="email" required value="pochta@yandex.ru" />

          <label className="login__label">Пароль</label>
          <input className="login__input" id="input-pass" name="pass" type="text" required />

          <button className="login__button" type="submit">Войти</button>
        </form>
        <p className="login__text">Ещё не зарегистрированы? <Link to="/signup" className="login__link" >Регистрация</Link> </p>
      </div>
    </section>
  );
};