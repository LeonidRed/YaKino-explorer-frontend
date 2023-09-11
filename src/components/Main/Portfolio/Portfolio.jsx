import './Portfolio.css'
import item_icon from '../../../images/portfolio__item-icon.svg';

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__header">Портфолио</h2>

        <ul className="portfolio__items">
          <li className="portfolio__item">
            <a href="https://github.com/LeonidRed/how-to-learn" className="portfolio__item-link" target="_blank" rel="noreferrer">
              <p className="portfolio__item-text">Статичный сайт</p>
              <img className='portfolio__item-icon' src={item_icon} alt="иконка перехода на другой сайт" />
            </a>
          </li>
          <li className="portfolio__item">
            <a href="https://leonidred.github.io/russian-travel/" className="portfolio__item-link" target="_blank" rel="noreferrer">
              <p className="portfolio__item-text">Адаптивный сайт</p>
              <img className='portfolio__item-icon' src={item_icon} alt="иконка перехода на другой сайт" />
            </a>
          </li>
          <li className="portfolio__item">
            <a href="https://github.com/LeonidRed/react-mesto-api-full-gha" className="portfolio__item-link" target="_blank" rel="noreferrer">
              <p className="portfolio__item-text">Одностраничное приложение</p>
              <img className='portfolio__item-icon' src={item_icon} alt="иконка перехода на другой сайт" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};