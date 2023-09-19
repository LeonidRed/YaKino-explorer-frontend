import './Register.css';
import logo from '../../images/header-logo.svg';
import { Link } from 'react-router-dom';
import React from 'react';
import { useFormWithValidation } from "../../hooks/useFormWithValidation";


export default function Register(props) {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  // console.log(errors);

  // const [formValue, setFormValue] = React.useState({
  //   name: '',
  //   email: '',
  //   password: '',
  // });

  // console.log(formValue);

  // const handleChange = (e) => {
  //   const { name, value } = e.target

  //   setFormValue({
  //     ...formValue,
  //     [name]: value
  //   })
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    // здесь обработчик регистрации
    const { name, email, password } = values;
    props.onRegister(name, email, password)
  }

  return (
    <main className="register">
      {/* <section className="register"> */}
      <div className="register__container">
        <Link to="/" className="register__main-link">
          <img className="register__logo" src={logo} alt="Логотип сайта" />
        </Link>
        <h1 className="register__header">Добро пожаловать!</h1>

        <form className="register__form" onSubmit={handleSubmit}>
          <label className="register__label">Имя</label>
          <input
            className="register__input"
            id="input-name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            placeholder="Введите имя"
            minLength="2"
            maxLength="30"
            pattern="^[A-Za-zА-Яа-яЁё]+$"
            required
          />
          <span className="register__input-error">{errors.name}</span>

          <label className="register__label">E-mail</label>
          <input
            className="register__input"
            id="input-email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder='Введите почту'
            pattern="\S+@\S+\.\S+"
            required
          />
          <span className="register__input-error">{errors.email}</span>

          <label className="register__label">Пароль</label>
          <input
            className="register__input"
            id="input-pass"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            placeholder='Введите пароль'
            minLength="8"
            required
          />
          <span className="register__input-error">{errors.password}</span>
          <button
            className={`register__button ${!isValid ? 'register__button-disabled' : ''}`}
            type="submit"
            disabled={!isValid}
          >Зарегистрироваться</button>
        </form>

        <p className="register__text">Уже зарегистрированы?
          <Link to="/signin" className="register__link">Войти</Link> </p>
      </div>
      {/*  </section> */}
    </main >
  );
};