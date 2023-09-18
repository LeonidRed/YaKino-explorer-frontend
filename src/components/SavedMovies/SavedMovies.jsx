import './SavedMovies.css'
import HeaderLogin from '../Movies/HeaderLogin/HeaderLogin'
import SearchForm from '../Movies/SearchForm/SearchForm'
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList'
import Footer from '../Footer/Footer'


export default function SavedMovies(props) {

  return (
    <div className="movies">
      <HeaderLogin />
      <main>
        <SearchForm />
        <SavedMoviesCardList
          savedFilms={props.savedFilms}
          getSavedFilms={props.getSavedFilms}
          handleDeleteLikeFilm={props.handleDeleteLikeFilm}
        />
      </main>
      <Footer />
    </div>
  );
};