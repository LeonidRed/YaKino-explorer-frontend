import './Movies.css'
import HeaderLogin from './HeaderLogin/HeaderLogin'
import SearchForm from './SearchForm/SearchForm'
import Preloader from './Preloader/Preloader'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import MoreMovies from './MoreMovies/MoreMovies'
import Footer from '../Footer/Footer'



export default function Movies() {

  return (
    <div className="movies">
      <HeaderLogin />
      <main>
        <SearchForm />
        {/* <Preloader /> */}
        <MoviesCardList />
        <MoreMovies />
      </main>
      <Footer />
    </div>
  );
};