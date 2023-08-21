import './Promo.css'
import promo_img from '../../../images/promo_img.png';

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__column">
          <h1 className="promo__header">Учебный проект студента факультета&nbsp;Веб-разработки.</h1>
          <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a className='promo__link' href='#about-project'>Узнать&nbsp;больше</a>
        </div>

        <img className="promo__img" src={promo_img} alt="Изображение глобуса на промо-картинке" />
      </div>
    </section>
  );
};