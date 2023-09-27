import './Movies.css';
import React from 'react';
import HeaderLogin from './HeaderLogin/HeaderLogin';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import InfoToolTip from '../InfoToolTip/InfoToolTip';
import * as moviesApi from '../../utils/MoviesApi';

export default function Movies(props) {
  const [movies, setMovies] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isCheckboxEnable, setCheckBoxEnable] = React.useState(false);
  const [isSearchError, setIsSearchError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isFirstSearch, setIsFirstSearch] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("inputSearchValue")) {
      setSearchValue(localStorage.getItem("inputSearchValue"));
    }

    if (localStorage.getItem("isCheckboxEnable") === "enable") {
      setCheckBoxEnable(true);
      setMovies(JSON.parse(localStorage.getItem("foundShortMovies")));
      if (JSON.parse(localStorage.getItem("foundShortMovies").length === 2)) {
        setIsSearchError("Нет фильмов по Вашему запросу");
      }
    }

    if (localStorage.getItem("isCheckboxEnable") === "disable") {
      setCheckBoxEnable(false);
      setMovies(JSON.parse(localStorage.getItem("foundMovies")));
    }
  }, [])


  function updateMovies(allMovies, value) {
    if (value || value === '') {
      // if (value) {
      setSearchValue(value);
      localStorage.setItem("inputSearchValue", value);

      const filteredMovies = filteredByName(allMovies, value);
      localStorage.setItem("foundMovies", JSON.stringify(filteredMovies));

      if (filteredMovies.length !== 0) {
        setIsSearchError("");
        setMovies(filteredMovies);
      } else {
        setIsSearchError("Нет фильмов по Вашему запросу");
        setMovies([]);
      }

      if (isCheckboxEnable) {
        localStorage.setItem("isCheckboxEnable", "enable");
        const filteredShortMovies = filteredByDuration(filteredMovies, value);
        // проверка на пустой массив при поиске
        if (filteredShortMovies.length !== 0) {
          setIsSearchError("");
          localStorage.setItem("foundShortMovies", JSON.stringify(filteredShortMovies));
          setMovies(JSON.parse(localStorage.getItem("foundShortMovies")))
        } else {
          setIsSearchError("Нет фильмов по Вашему запросу");
          localStorage.setItem("foundShortMovies", JSON.stringify(filteredShortMovies));
        }

      } else {
        localStorage.setItem("isCheckboxEnable", "disable");
        setMovies(JSON.parse(localStorage.getItem("foundMovies")))

      }
    }
  }

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
    if (isFirstSearch) {
      const allMovies = JSON.parse(localStorage.getItem("allMovies") || "[]");
      if (allMovies.length === 0) {
        setIsLoading(true);
        moviesApi.getMovies()
          .then((movies) => {
            localStorage.setItem("allMovies", JSON.stringify(movies));
            updateMovies(movies, value)
            setIsLoading(false)
          }).catch((err) => {
            console.log(err);
          })
      } else {
        updateMovies(allMovies, value)
      }
    } else {
      setIsFirstSearch(true)
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
          searchValue={searchValue}
          handleSearch={handleSearch}
          isCheckboxEnable={isCheckboxEnable}
          toggleCheckbox={toggleCheckbox} />
        {isLoading ? <Preloader /> :
          isSearchError ? <InfoToolTip message={isSearchError} /> :
            <>
              <MoviesCardList
                films={movies}
                savedFilms={props.savedFilms}
                handlePutLikeFilm={props.handlePutLikeFilm}
                handleDeleteLikeFilm={props.handleDeleteLikeFilm}
              />
            </>
        }
      </main>
      <Footer />
    </div>
  );
};