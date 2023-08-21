import './Footer.css'

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <h4 className="footer__header">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
        <nav className="footer__menu">
          <p className="footer__copyright">© 2023</p>
          <ul className="footer__items">
            <li className="footer__item">
              <a href="https://practicum.yandex.ru/" className="footer__menu-item">Яндекс.Практикум</a>
            </li>
            <li className="footer__item">
              <a href="https://github.com/LeonidRed" className="footer__menu-item">GitHub</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};