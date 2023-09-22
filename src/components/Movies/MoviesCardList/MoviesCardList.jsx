import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoreMovies from '../MoreMovies/MoreMovies';

export default function MoviesCardList(props) {

  const [films, setFilms] = React.useState(props.films);
  const [renderedFilms, setRenderedFilms] = React.useState([]);
  const [currentWidth, setCurrentWidth] = React.useState(window.innerWidth);
  const [isNeedMoreMovies, setIsNeedMoreMovies] = React.useState(false);

  React.useEffect(() => {
    if (currentWidth > 768) {
      setFilms(props.films)
      setRenderedFilms(films.slice(0, 16));
      setCurrentWidth(window.innerWidth)
    } else if (currentWidth > 320 && currentWidth <= 768) {
      setFilms(props.films)
      setRenderedFilms(films.slice(0, 8));
      setCurrentWidth(window.innerWidth)
    } else {
      setFilms(props.films)
      setRenderedFilms(films.slice(0, 5));
      setCurrentWidth(window.innerWidth)
    }
  }, [currentWidth, films]); // props.films не указывать, иначе перерисовка

  React.useEffect(() => {
    if (renderedFilms.length < films.length) {
      setIsNeedMoreMovies(true);
    } else {
      setIsNeedMoreMovies(false);
    }
  }, [renderedFilms.length, films.length]);

  function onMoreMoviesClick() {
    if (
      renderedFilms.length < films.length &&
      currentWidth > 768
    ) {
      setRenderedFilms(films.slice(0, renderedFilms.length + 16));
    } else if (
      (renderedFilms.length < films.length) &&
      (currentWidth > 320 && currentWidth <= 768)
    ) {
      setRenderedFilms(films.slice(0, renderedFilms.length + 8));
    } else {
      setRenderedFilms(films.slice(0, renderedFilms.length + 5));
    }
  }

  return (
    <>
      <ul className="movies-card-list">
        {renderedFilms.map(film => (
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
      {isNeedMoreMovies && <MoreMovies onClick={onMoreMoviesClick} />}
    </>
  )
}