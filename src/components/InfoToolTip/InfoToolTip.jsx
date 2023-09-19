import './InfoToolTip.css';

export default function InfoToolTip({ message }) {
  return (
    <section className='infotooltip-container' >
      <div className='infotooltip-container__text'>
        {message}
      </div>
    </section>
  );
};
