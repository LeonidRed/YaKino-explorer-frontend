import './SearchForm.css';
import React from 'react';


export default function SearchForm(props) {
  console.log(props);
  const [formValue, setFormValue] = React.useState({
    title: localStorage.getItem('title')
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { title } = formValue;
    localStorage.setItem('title', title);
    props.onMovieSearch(title);
  }

  return (
    <section className='search-form'>
      <form className='search-form__container' onSubmit={handleSubmit}>
        <div className='search-form__row'>
          <div className='search-form__input-container'>
            <input
              className='search-form__input'
              name="title"
              type="text"
              // value={localStorage.getItem('title') || formValue.title}
              value={formValue.title}
              onChange={handleChange}
              placeholder='Фильм'
              required
            />
            {/* <button className='search-form__input-btn' type='submit'>Найти</button> */}
            <button className={`search-form__input-btn ${!formValue.title ? 'search-form__input-btn-disabled' : ''}`}
              type='submit'
              disabled={!formValue.title}
            >Найти</button>
          </div>
          <div className='search-form__toggle-container'>
            <input type="checkbox" name="toggle" id="toggle-btn" className="search-form__toggle-btn" />
            <label htmlFor="toggle-btn" className='search-form__toggle-text'>Короткометражки</label>
          </div>
        </div>
      </form>
    </section >
  );
};