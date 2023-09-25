import './Profile.css';
import { Link } from 'react-router-dom';
import HeaderLogin from '../Movies/HeaderLogin/HeaderLogin';
import Footer from '../Footer/Footer';
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";


export default function Profile(props) {

  const currentUser = React.useContext(CurrentUserContext)
  const { values, handleChange, errors, isValid, setValues } = useFormWithValidation();
  const [infoMessage, setInfoMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const isNameEdited = currentUser.name !== values.name;
  const isEmailEdited = currentUser.email !== values.email
  const isValueEdited = isNameEdited || isEmailEdited;

  React.useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email
    })
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault()
    // здесь обработчик редактирования профиля
    let data = {};
    if (isNameEdited && isEmailEdited) {
      data.name = values.name
      data.email = values.email
    } else if (isNameEdited) {
      data.name = values.name
      data.email = currentUser.email
    } else if (isEmailEdited) {
      data.name = currentUser.name
      data.email = values.email
    }

    props.onUpdateUser(data, setInfoMessage, setErrorMessage)
  }

  const onInputFocus = () => {
    setInfoMessage('');
    setErrorMessage('');
  }

  return (
    <>
      <HeaderLogin />
      <main className="profile">

        <div className="profile__container">

          <h1 className="profile__header">Привет, {currentUser.name}!</h1>
          <form className="profile__form" onSubmit={handleSubmit}>

            <div className="profile__inputs">
              <div className="profile__input-name">
                <label className="profile__label">Имя</label>
                <input
                  className="profile__input"
                  id="input-name"
                  name="name"
                  type="text"
                  value={values.name || currentUser.name}
                  onChange={handleChange}
                  onFocus={onInputFocus}
                  placeholder="Введите имя"
                  minLength="2"
                  maxLength="30"
                  pattern="^[A-Za-zА-Яа-яЁё]+$"
                  required
                />
              </div>
              <span className="profile__input-error">{errors.name}</span>

              <div className="profile__input-email">
                <label className="profile__label">E-mail</label>
                <input
                  className="profile__input"
                  id="input-email"
                  name="email"
                  type="email"
                  value={values.email || currentUser.email}
                  onChange={handleChange}
                  onFocus={onInputFocus}
                  placeholder='Введите почту'
                  pattern="\S+@\S+\.\S+"
                  required
                />
              </div>
              <span className="profile__input-error">{errors.email}</span>

            </div>

            <div className="profile__buttons">
              <p className="profile__service-info">{infoMessage || errorMessage}</p>
              <button
                className={`profile__button-edit ${!isValid || !isValueEdited ? 'profile__button-edit_disabled' : ''}`}
                type="submit"
              >
                Редактировать
              </button>
              <Link to="/" className="profile__button-exit" onClick={props.userSignOut}>Выйти из аккаунта</Link>
            </div>

          </form>

        </div >
      </main >
      <Footer />
    </>
  );
};