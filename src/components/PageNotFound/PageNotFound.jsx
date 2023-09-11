import './PageNotFound.css'
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {

  const navigate = useNavigate();

  return (
    <main className="page-not-found__main">
      <h1 className="page-not-found__header">404</h1>
      <p className="page-not-found__text">Страница не найдена</p>
      <button className="page-not-found__link" onClick={() => navigate(-1)} type="button">Назад</button>
    </main>
  );
};