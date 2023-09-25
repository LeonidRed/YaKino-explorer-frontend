import './Login.css'
import logo from '../../images/header-logo.svg'
import { Link } from 'react-router-dom';
import React from 'react';
import { useFormWithValidation } from "../../hooks/useFormWithValidation";


export default function Login(props) {

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!values.email || !values.password) {
      return
    }
    const { email, password } = values
    props.onLogin(email, password)
  }

  return (
    <main className="login">

      <div className="login__container">
        <Link to="/" className="login__main-link">
          <img className="login__logo" src={logo} alt="Логотип сайта" />
        </Link>
        <h1 className="login__header">Рады видеть!</h1>
        <form className="login__form" onSubmit={handleSubmit}>
          <label className="login__label">E-mail</label>
          <input
            className="login__input"
            id="input-email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            pattern="\S+@\S+\.\S+"
            placeholder="Введите email"
            required />
          <span className="login__input-error">{errors.email}</span>


          <label className="login__label">Пароль</label>
          <input
            className="login__input"
            id="input-pass"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Введите пароль"
            minLength="8"
            required />
          <span className="login__input-error">{errors.password}</span>


          <button className={`login__button ${!isValid ? 'login__button-disabled' : ''}`}
            type="submit"
            disabled={!isValid}
          >Войти</button>
        </form>
        <p className="login__text">Ещё не зарегистрированы? <Link to="/signup" className="login__link" >Регистрация</Link> </p>

      </div >
    </main>
  );
};