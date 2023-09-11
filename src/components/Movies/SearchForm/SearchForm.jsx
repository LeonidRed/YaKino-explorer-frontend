import './SearchForm.css'

export default function SearchForm() {
  return (
    <section className='search-form'>
      <form className='search-form__container'>
        <div className='search-form__row'>
          <div className='search-form__input-container'>
            <input className='search-form__input' placeholder='Фильм' required />
            <button className='search-form__input-btn' type='submit'>Найти</button>
          </div>
          <div className='search-form__toggle-container'>
            <input type="checkbox" name="toggle" id="toggle-btn" className="search-form__toggle-btn" />
            <label htmlFor="toggle-btn" className='search-form__toggle-text'>Короткометражки</label>
            {/* <label className='search-form__toggle-text'>Короткометражки</label> */}
          </div>
        </div>
      </form>
    </section >
  );
};