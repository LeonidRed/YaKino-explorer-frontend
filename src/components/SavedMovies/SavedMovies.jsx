import './SavedMovies.css';
import React from 'react';
import HeaderLogin from '../Movies/HeaderLogin/HeaderLogin';
import SearchForm from '../Movies/SearchForm/SearchForm';
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList';
import Footer from '../Footer/Footer';
import InfoToolTip from '../InfoToolTip/InfoToolTip';


export default function SavedMovies(props) {

  const [savedTglBtn, setSavedTglBtn] = React.useState('');
  const [savedTitle, setSavedTitle] = React.useState('');

  function onSavedMovieSearch(title, toggleBtn) {
    setSavedTitle(title);
    setSavedTglBtn(!toggleBtn)
  }

  const savedFilteredFilms = props.savedFilms.filter(film => {
    if (!savedTglBtn) {
      return film.nameRU.toLowerCase().includes(savedTitle.toLowerCase())
    } else {
      return film.nameRU.toLowerCase().includes(savedTitle.toLowerCase())
        && film.duration <= 41
    }
  })
  localStorage.setItem('savedFilteredFilms', JSON.stringify(savedFilteredFilms));

  const renderSavedFilteredFilms = () => {
    return JSON.parse(localStorage.getItem('savedFilteredFilms'))
  }

  console.log("savedFilteredFilms", savedFilteredFilms);
  console.log(savedFilteredFilms.lenght === 0);

  return (
    <div className="movies">
      <HeaderLogin />
      <main>
        <SearchForm onSavedMovieSearch={onSavedMovieSearch} />
        {/* {savedFilteredFilms.length === 0 ? <InfoToolTip message={'Ничего не найдено'} /> : */}
        <SavedMoviesCardList
          savedFilms={renderSavedFilteredFilms() ?? props.savedFilms}
          getSavedFilms={props.getSavedFilms}
          handleDeleteLikeFilm={props.handleDeleteLikeFilm}
        />
        {/* } */}
      </main>
      <Footer />
    </div>
  );
};