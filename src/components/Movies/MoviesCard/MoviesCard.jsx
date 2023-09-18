import './MoviesCard.css';
import React from 'react';

export default function MoviesCard(props) {

  const [isLiked, setIsLiked] = React.useState(false);

  const likedFilm = () => {
    return props.savedFilms.find(film => film.movieId === props.film.id);
  }

  React.useEffect(() => {
    setIsLiked(
      props.savedFilms.some((item) => {
        return item.movieId === props.film.id;
      })
    )
  }, [props.savedFilms])

  function getMovieDuration(mins) {
    if (mins > 0) {
      if (mins > 60) {
        return `${Math.floor(mins / 60)}ч ${mins % 60}м`;
      } else if (mins === 60) {
        return '1ч'
      } else {
        return `${mins} мин`
      }
    } else {
      return 'Длительность не указана'
    }
  }

  function toggleLikeFilm() {
    if (isLiked) {
      props.deleteLikedFilm(likedFilm()._id)
    } else {
      props.putLikeOnFilm(props.film)
    }
  }

  return (
    <li className='movies-card'>
      <a className='movies-card__link' href={props.film.trailerLink} target="_blank" rel="noreferrer">
        <img className='movies-card__img' src={`https://api.nomoreparties.co${props.film.image.url}`} alt={props.film.nameRU} />
      </a>
      <div className='movies-card__description'>
        <div className='movies-card__caption'>
          <h2 className='movies-card__title'>{props.film.nameRU}</h2>
          <button
            className={`movies-card__like-btn ${isLiked ? "movies-card__like-btn-active" : ''}`}
            type="button"
            onClick={toggleLikeFilm} />
        </div>
        <p className='movies-card__duration'>{getMovieDuration(props.film.duration)}</p>
      </div>
    </li >
  );
};