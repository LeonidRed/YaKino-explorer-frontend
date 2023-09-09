import './MoviesCard.css'
import testImg from '../../../images/testImg.png'

export default function MoviesCard() {
  return (
    <li className='movies-card'>
      <a className='movies-card__link' href="ya.ru" target="_blank" rel="noreferrer">
        <img className='movies-card__img' src={testImg} alt="Подпись к картинке" />
      </a>
      <div className='movies-card__description'>
        <div className='movies-card__caption'>
          <h2 className='movies-card__title'>Дженис: Маленькая девочка грустит</h2>
          <button className="movies-card__like-btn" type="button" />
        </div>
        <p className='movies-card__duration'>1ч42м</p>
      </div>
    </li >
  );
};