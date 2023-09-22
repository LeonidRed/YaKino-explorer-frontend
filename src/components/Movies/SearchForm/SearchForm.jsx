import './SearchForm.css';
import React from 'react';
import { useLocation } from "react-router-dom";


export default function SearchForm(props) {
  const { pathname } = useLocation();

  // console.log(props);

  // const [toggleBtn, setToggleBtn] = React.useState(true)
  const [toggleBtn, setToggleBtn] = React.useState(
    JSON.parse(localStorage.getItem('search-form__toggle-btn')) ?? true)

  const [formValue, setFormValue] = React.useState({
    title: localStorage.getItem('search-form__input-btn')
  } ?? '')

  //   React.useEffect(() => {
  //     handleSearch(values.searchValue);
  // }, [isCheckboxEnable]);

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  const handleClick = () => {
    setToggleBtn(!toggleBtn)
    // setToggleBtn(!false)

    localStorage.setItem('search-form__toggle-btn', toggleBtn);
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (pathname === '/movies') {
      const { title } = formValue;
      if (title === null) {
        let title = '';
        localStorage.setItem('search-form__input-btn', title);
        props.onMovieSearch(title);
      } else {
        localStorage.setItem('search-form__input-btn', title);
        props.onMovieSearch(title);
      }
    } else {
      // console.log(pathname);
      const { title } = formValue;
      // console.log(title);
      // console.log(toggleBtn);

      props.onSavedMovieSearch(title, toggleBtn);
    }
  }

  // console.log(!toggleBtn);

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const { title } = formValue;
  //   if (title === null) {
  //     let title = '';
  //     localStorage.setItem('search-form__input-btn', title);
  //     props.onMovieSearch(title);
  //   } else {
  //     localStorage.setItem('search-form__input-btn', title);
  //     props.onMovieSearch(title);
  //   }
  // }

  return (
    <section className="search-form">
      <form className="search-form__container" onSubmit={handleSubmit}>
        <div className="search-form__row">
          <div className="search-form__input-container">
            <input
              className="search-form__input"
              name="title"
              type="text"
              // value={localStorage.getItem("title") || formValue.title}
              value={formValue.title || ""}
              onChange={handleChange}
              placeholder="Фильм"
            // required
            />
            {/* <button className={`search-form__input-btn ${!formValue.title ? "search-form__input-btn-disabled" : ""}`} */}
            <button className={"search-form__input-btn"}
              type="submit"
            // disabled={!formValue.title}
            >Найти</button>
          </div>
          <div className="search-form__toggle-container">
            <input
              type="checkbox"
              name="toggle"
              id="toggle-btn"
              // className={`search-form__toggle-btn ${!toggleBtn ? 'search-form__toggle-btn-active' : ''}`}
              className="search-form__toggle-btn"
              checked={!toggleBtn || ''}
              // onClick={handleClick}
              onChange={handleClick}

            />
            <label htmlFor="toggle-btn" className="search-form__toggle-text">Короткометражки</label>
          </div>
        </div>
      </form>
    </section >
  );
};