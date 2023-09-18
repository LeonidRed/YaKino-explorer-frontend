import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList(props) {

  return (
    <ul className="movies-card-list">
      {props.films.map(film => (
        <MoviesCard
          film={film}
          key={film.id}
          savedFilms={props.savedFilms}
          putLikeOnFilm={props.handlePutLikeFilm}
          deleteLikedFilm={props.handleDeleteLikeFilm}
        />
      ))
      }
    </ul>
  )
}