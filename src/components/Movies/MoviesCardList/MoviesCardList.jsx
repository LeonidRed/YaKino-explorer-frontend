import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList(props) {

  return (
    <ul className="movies-card-list">
      {props.films.map(film => (
        <MoviesCard
          film={film}
          key={film._id}
        // onCardClick={onCardClick}
        // onCardLike={onCardLike}
        // onCardDelete={onCardDelete}
        />
      )).reverse()
      }
    </ul>
  )
}