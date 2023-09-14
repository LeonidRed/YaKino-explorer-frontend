import './Login.css'
import logo from '../../images/header-logo.svg'
import { Link } from 'react-router-dom';
import React from 'react';

export default function Login(props) {

  const [formValue, setFormValue] = React.useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formValue.email || !formValue.password) {
      return
    }
    const { email, password } = formValue
    props.onLogin(email, password)
    setFormValue({ email: '', password: '' })
  }

  return (
    // <section className="login">
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
            value={formValue.email}
            onChange={handleChange}
            // defaultValue="pochta@yandex.ru"
            placeholder="Введите email"
            required />

          <label className="login__label">Пароль</label>
          <input
            className="login__input"
            id="input-pass"
            name="password"
            type="password"
            value={formValue.password}
            onChange={handleChange}
            placeholder="Введите пароль"
            minLength="8"
            required />

          <button className={`login__button ${!formValue.email ? 'login__button-disabled' : ''}`}
            type="submit"
            disabled={!formValue.email}
          >Войти</button>
        </form>
        <p className="login__text">Ещё не зарегистрированы? <Link to="/signup" className="login__link" >Регистрация</Link> </p>

      </div >
      {/* </section > */}
    </main>
  );
};