import './Profile.css';
import { Link } from 'react-router-dom';
import HeaderLogin from '../Movies/HeaderLogin/HeaderLogin';
import Footer from '../Footer/Footer';

export default function Profile(props) {
  return (
    <>
      <HeaderLogin />
      <main className="profile">
        {/* <section className="profile"> */}

        <div className="profile__container">

          <h1 className="profile__header">Привет, Виталий!</h1>
          <form className="profile__form">

            <div className="profile__inputs">
              <div className="profile__input-name">
                <label className="profile__label">Имя</label>
                <input className="profile__input" id="input-name" name="name" type="text" required defaultValue="Виталий" placeholder="Введите имя" minLength="2" maxLength="30" />
              </div>

              <div className="profile__input-email">
                <label className="profile__label">E-mail</label>
                <input className="profile__input" id="input-email" name="email" type="email" required defaultValue="pochta@yandex.ru" placeholder='Введите почту' />
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