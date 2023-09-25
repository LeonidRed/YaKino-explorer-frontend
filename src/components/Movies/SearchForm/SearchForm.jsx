import './SearchForm.css';
import React from 'react';

export default function SearchForm(props) {
  const [values, setValues] = React.useState('');

  // установим значение для поиска после перезагрузки
  React.useEffect(() => {
    setValues({ searchValue: props.searchValue });
  }, [props.searchValue, setValues]);

  React.useEffect(() => {
    props.handleSearch(values.searchValue);
  }, [props.isCheckboxEnable]);

  function handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    props.handleSearch(values.searchValue);
  }

  return (
    <section className="search-form">
      <form className="search-form__container" onSubmit={handleFormSubmit}>

        <div className="search-form__row">
          <div className="search-form__input-container">
            <input
              className="search-form__input"
              name="searchValue"
              type="text"
              value={values.searchValue || ""}
              onChange={handleChange}
              placeholder="Фильм"
            />
            <button className={"search-form__input-btn"}
              type="submit"
            >Найти</button>
          </div>
          <div className="search-form__toggle-container">
            <input
              type="checkbox"
              name="toggle"
              id="toggle-btn"
              className="search-form__toggle-btn"
              checked={props.isCheckboxEnable}
              onChange={props.toggleCheckbox}
            />
            <label htmlFor="toggle-btn" className="search-form__toggle-text">Короткометражки</label>
          </div>
        </div>
      </form>
    </section >
  );
};