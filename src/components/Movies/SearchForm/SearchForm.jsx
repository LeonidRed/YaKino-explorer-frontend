import './SearchForm.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchForm(props) {
  const { pathname } = useLocation();

  const [values, setValues] = React.useState('');

  // console.log(props);
  // console.log(values.searchValue);


  // установим значение для поиска после перезагрузки
  React.useEffect(() => {
    setValues({ searchValue: props.searchValue });
  }, [props.searchValue, setValues]);

  console.log(values);


  React.useEffect(() => {
    console.log(values.searchValue);
    // props.handleSearch(values.searchValue);
    props.handleSearch(localStorage.getItem("inputSearchValue"));

    // debugger
  }, [props.isCheckboxEnable]);
  // }, []);
  // } 

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