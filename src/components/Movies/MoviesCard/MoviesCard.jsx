import './MoviesCard.css'
const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies'

export default function MoviesCard(props) {



  return (
    <li className='movies-card'>
      <a className='movies-card__link' href={props.film.trailerLink} target="_blank" rel="noreferrer">
        <img className='movies-card__img' src={`https://api.nomoreparties.co${props.film.image.url}`} alt={props.film.nameRU} />
      </a>
      <div className='movies-card__description'>
        <div className='movies-card__caption'>
          <h2 className='movies-card__title'>{props.film.nameRU}</h2>
          <button className="movies-card__like-btn" type="button" />
        </div>
        <p className='movies-card__duration'>{props.film.duration}</p>
      </div>
    </li >
  );
};