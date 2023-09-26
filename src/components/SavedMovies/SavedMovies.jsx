import './SavedMovies.css';
import React from 'react';
import HeaderLogin from '../Movies/HeaderLogin/HeaderLogin';
import SearchForm from '../Movies/SearchForm/SearchForm';
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList';
import Footer from '../Footer/Footer';
import InfoToolTip from '../InfoToolTip/InfoToolTip';


export default function SavedMovies(props) {
  const [movies, setMovies] = React.useState(props.savedFilms);
  const [searchValue, setSearchValue] = React.useState("");
  const [isCheckboxEnable, setCheckBoxEnable] = React.useState(false);
  const [isSearchError, setIsSearchError] = React.useState("");

  const updateMovies = React.useCallback((value) => {
    const filteredMovies = filteredByName(props.savedFilms, value);
    localStorage.setItem("foundSavedMovies", JSON.stringify(filteredMovies));

    if (filteredMovies.length !== 0) {
      setIsSearchError("");
      setMovies(filteredMovies);
    } else {
      setIsSearchError("Вы ещё не сохранили фильмы с таким названием");
      setMovies([]);
    }

    if (isCheckboxEnable) {
      const filteredShortMovies = filteredByDuration(filteredMovies);

      // проверка на пустой массив
      if (filteredShortMovies.length !== 0) {
        setIsSearchError("");
      } else {
        setIsSearchError("Вы ещё не сохранили фильмы с таким названием");
      }

      localStorage.setItem("foundSavedShortMovies", JSON.stringify(filteredShortMovies));
    }

    if (isCheckboxEnable) {
      setMovies(JSON.parse(localStorage.getItem("foundSavedShortMovies")))
    } else {
      setMovies(JSON.parse(localStorage.getItem("foundSavedMovies")))
    }

  }, [isCheckboxEnable, props.savedFilms])

  React.useEffect(() => {
    if (searchValue || searchValue === '') {
      updateMovies(searchValue);
    } else {
      setMovies(props.savedFilms);
    }

  }, [props.savedFilms, searchValue, updateMovies])

  function filteredByName(movies, searchValue) {
    return movies.filter(film => {
      return film.nameRU.toLowerCase().includes(searchValue.toLowerCase())
    })
  }

  function filteredByDuration(movies) {
    return movies.filter((item) => {
      return item.duration <= 40;
    })
  }

  function handleSearch(value) {
    if (value || value === '') {
      setSearchValue(value);
      localStorage.setItem("savedMovieValue", value);
      updateMovies(value);
    } else {
      isCheckboxEnable ? setMovies(filteredByDuration(props.savedFilms)) : setMovies(props.savedFilms);
    }
  }

  function toggleCheckbox() {
    setCheckBoxEnable(!isCheckboxEnable);
  }

  return (
    <div className="movies">
      <HeaderLogin />
      <main>
        <SearchForm
          handleSearch={handleSearch}
          isCheckboxEnable={isCheckboxEnable}
          toggleCheckbox={toggleCheckbox}
        />
        {isSearchError ? <InfoToolTip message={isSearchError} /> :
          <SavedMoviesCardList
            savedFilms={movies}
            getSavedFilms={props.getSavedFilms}
            handleDeleteLikeFilm={props.handleDeleteLikeFilm}
          />
        }
      </main>
      <Footer />
    </div>
  );
};