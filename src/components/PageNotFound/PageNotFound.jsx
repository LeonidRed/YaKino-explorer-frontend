import './PageNotFound.css'

export default function PageNotFound() {
  return (
    <section className="page-not-found">
      <h1 className="page-not-found__header">404</h1>
      <p className="page-not-found__text">Страница не найдена</p>
      <button className="page-not-found__link">Назад</button>
    </section>
  );
};