import './Profile.css';
import { Link } from 'react-router-dom';
import HeaderLogin from '../Movies/HeaderLogin/HeaderLogin';
import Footer from '../Footer/Footer';
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Profile(props) {

  const currentUser = React.useContext(CurrentUserContext)

  const [name, setName] = React.useState()
  const [email, setEmail] = React.useState()

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // здесь обработчик редактирования профиля
    props.onUpdateUser({
      name: name,
      email: email,
    })
  }

  React.useEffect(() => {
    setName(currentUser.name)
    setEmail(currentUser.email)
  }, [currentUser])

  return (
    <>
      <HeaderLogin />
      <main className="profile">
        {/* <section className="profile"> */}

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
                  value={name || ''}
                  onChange={handleNameChange}
                  // defaultValue="Виталий"
                  placeholder="Введите имя"
                  minLength="2"
                  maxLength="30"
                  required
                />
              </div>

              <div className="profile__input-email">
                <label className="profile__label">E-mail</label>
                <input
                  className="profile__input"
                  id="input-email"
                  name="email"
                  type="email"
                  value={email || ''}
                  onChange={handleEmailChange}
                  // defaultValue="pochta@yandex.ru"
                  placeholder='Введите почту'
                  required
                />
              </div>

            </div>

            <div className="profile__buttons">
              <button className="profile__button-edit" type="submit">Редактировать</button>
              <Link to="/" className="profile__button-exit" onClick={props.userSignOut}>Выйти из аккаунта</Link>
            </div>

          </form>

        </div >
      </main >
      <Footer />
    </>
  );
};