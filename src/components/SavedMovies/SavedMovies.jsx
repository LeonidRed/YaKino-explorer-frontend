import './SavedMovies.css'
import HeaderLogin from '../Movies/HeaderLogin/HeaderLogin'
import SearchForm from '../Movies/SearchForm/SearchForm'
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList'
import Footer from '../Footer/Footer'



export default function SavedMovies() {

  return (
    <div className="movies">
      <HeaderLogin />
      <main>
        <SearchForm />
        <SavedMoviesCardList />
      </main>
      <Footer />
    </div>
  );
};