import './SavedMoviesCardList.css';
import React from 'react';
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard'


export default function SavedMoviesCardList(props) {

  React.useEffect(() => {
    props.getSavedFilms();
  }, []);

  return (
    <ul className="movies-card-list">
      {props.savedFilms.map(film => (
        <SavedMoviesCard
          film={film}
          key={film._id}
          handleDeleteLikeFilm={props.handleDeleteLikeFilm}
        />
      ))
      }
    </ul>
  );
};