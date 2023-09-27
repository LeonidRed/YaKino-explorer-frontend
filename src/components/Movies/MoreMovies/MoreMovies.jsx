import './MoreMovies.css'

export default function MoreMovies(props) {
  return (
    <section className="more-movies">
      <button className="more-movies__btn" type="button" onClick={props.onClick}>Ещё</button>
    </section>
  );
};