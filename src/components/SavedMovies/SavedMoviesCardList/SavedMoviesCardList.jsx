import './SavedMoviesCardList.css'
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard'


export default function SavedMoviesCardList() {
  return (
    <section className="movies-card-list">
      <SavedMoviesCard />
      <SavedMoviesCard />
      <SavedMoviesCard />
    </section>
  );
};