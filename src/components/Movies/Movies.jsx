import './Movies.css';
import React from 'react';
import HeaderLogin from './HeaderLogin/HeaderLogin';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MoreMovies from './MoreMovies/MoreMovies';
import Footer from '../Footer/Footer';
import InfoToolTip from '../InfoToolTip/InfoToolTip';

export default function Movies(props) {

  React.useEffect(() => {
    savedFilteredFilms()
  }, []);

  let searchValue = localStorage.getItem('search-form__input-btn')
  let searchDuration = JSON.parse(localStorage.getItem('search-form__toggle-btn'))

  if (props.films.length !== 0) {
    const filteredFilms = props.films.filter(film => {
      if (!searchDuration) {
        return film.nameRU.toLowerCase().includes(searchValue.toLowerCase())
      } else {
        return film.nameRU.toLowerCase().includes(searchValue.toLowerCase())
          && film.duration <= 41
      }
    })
    localStorage.setItem('filteredFilms', JSON.stringify(filteredFilms));
  }

  const savedFilteredFilms = () => {
    return JSON.parse(localStorage.getItem('filteredFilms'))
  }


  return (
    <div className="movies">
      <HeaderLogin />
      <main>
        <SearchForm onMovieSearch={props.onMovieSearch} />
        {props.isLoading ? <Preloader /> :
          savedFilteredFilms().length === 0 ? <InfoToolTip message={'Ничего не найдено'} /> :
            <>
              <MoviesCardList
                films={savedFilteredFilms() ?? props.films}
                savedFilms={props.savedFilms}
                handlePutLikeFilm={props.handlePutLikeFilm}
                handleDeleteLikeFilm={props.handleDeleteLikeFilm}
              />
              <MoreMovies />
            </>
        }
      </main>
      <Footer />
    </div>
  );
};