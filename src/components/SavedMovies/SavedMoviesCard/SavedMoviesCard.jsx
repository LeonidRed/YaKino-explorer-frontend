import './SavedMoviesCard.css'
import testImg from '../../../images/testImg.png'

export default function SavedMoviesCard() {
  return (
    <li className='saved-movies-card'>
      <a className='saved-movies-card__link' href="ya.ru" target="_blank" rel="noreferrer">
        <img className='saved-movies-card__img' src={testImg} alt="Подпись к картинке" />
      </a>
      <div className='saved-movies-card__description'>
        <div className='saved-movies-card__caption'>
          <h3 className='saved-movies-card__title'>Дженис: Маленькая девочка грустит</h3>
          <button className="saved-movies-card__del-btn" type="button" />
        </div>
        <p className='saved-movies-card__duration'>1ч42м</p>
      </div>
    </li >
  );
};