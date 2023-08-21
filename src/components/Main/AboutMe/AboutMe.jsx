import './AboutMe.css'
import avatar from '../../../images/about-me__avatar.png'

export default function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__header">Студент</h2>
        <div className="about-me__info">
          <div className="about-me__info-column">
            <h3 className="about-me__title">Виталий</h3>
            <h4 className="about-me__subtitle">Фронтенд-разработчик, 30 лет</h4>

            <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>

            <a href="https://github.com/LeonidRed" className="about-me__link" target="_blank" rel="noreferrer">GitHub</a>
          </div>

          <img src={avatar} className="about-me__avatar" alt="Аватар автора" />
        </div>
      </div>
    </section>
  );
};