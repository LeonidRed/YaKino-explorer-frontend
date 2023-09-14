import './Movies.css';
import React from 'react';
import HeaderLogin from './HeaderLogin/HeaderLogin';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MoreMovies from './MoreMovies/MoreMovies';
import Footer from '../Footer/Footer';

export default function Movies(props) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1750);
  }, []);

  return (
    <div className="movies">
      <HeaderLogin />
      <main>
        <SearchForm onMovieSearch={props.onMovieSearch} />
        {
          isLoading ? (
            <Preloader />
          ) :
            <>
              <MoviesCardList films={props.films} />
              <MoreMovies />
            </>
        }
      </main>
      <Footer />
    </div>
  );
};