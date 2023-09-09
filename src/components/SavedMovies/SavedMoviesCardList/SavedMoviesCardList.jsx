import './SavedMoviesCardList.css'
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard'


export default function SavedMoviesCardList() {
  return (
    <ul className="movies-card-list">
      <SavedMoviesCard />
      <SavedMoviesCard />
      <SavedMoviesCard />
    </ul>
  );
};