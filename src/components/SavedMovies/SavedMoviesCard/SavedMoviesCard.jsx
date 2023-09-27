import './SavedMoviesCard.css';
import React from 'react';


export default function SavedMoviesCard(props) {

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

  function handleDeleteClick() {
    props.handleDeleteLikeFilm(props.film._id)
  }

  return (
    <li className='movies-card'>
      <a className='movies-card__link' href={props.film.trailerLink} target="_blank" rel="noreferrer">
        <img className='movies-card__img' src={props.film.thumbnail} alt={props.film.nameRU} />
      </a>
      <div className='movies-card__description'>
        <div className='movies-card__caption'>
          <h2 className='movies-card__title'>{props.film.nameRU}</h2>
          <button className="saved-movies-card__del-btn" onClick={handleDeleteClick} type="button" />
        </div>
        <p className='movies-card__duration'>{getMovieDuration(props.film.duration)}</p>
      </div>
    </li >
  );
};