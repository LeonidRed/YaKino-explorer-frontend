import './Profile.css'

export default function Profile() {
  return (
    <section className="profile">
      <div className="profile__container">

        <h1 className="profile__header">Привет, Виталий!</h1>
        <form className="profile__form">

          <div className="profile__inputs">
            <div className="profile__input-name">
              <label className="profile__label">Имя</label>
              <input className="profile__input" id="input-name" name="name" type="text" required value="Виталий" />
            </div>

            <div className="profile__input-email">
              <label className="profile__label">E-mail</label>
              <input className="profile__input" id="input-email" name="email" type="email" required value="pochta@yandex.ru" />
            </div>

          </div>

          <div className="profile__buttons">
            <button className="profile__button-edit" type="submit">Редактировать</button>
            <button className="profile__button-exit" type="submit">Выйти из аккаунта</button>
          </div>

        </form>

      </div>
    </section>
  );
};