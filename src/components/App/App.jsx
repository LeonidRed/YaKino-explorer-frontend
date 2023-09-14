import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"
// import Header from '../Header/Header';
// import HeaderLogin from '../Movies/HeaderLogin/HeaderLogin';
// import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';
import * as auth from '../../utils/auth';
import * as moviesApi from '../../utils/MoviesApi';

import React from 'react';
import { CurrentUserContext } from "../../contexts/CurrentUserContext"

function App() {

  const navigate = useNavigate()
  const [isLogged, setIsLogged] = React.useState(false)
  const [currentUser, setCurrentUser] = React.useState({})
  const [films, setFilms] = React.useState([])


  console.log('isLogged start ', isLogged);

  // React.useEffect(() => {
  //   isLogged &&
  //   Promise.all([api.getUserInfo(), api.getInitialCards()])
  //     .then(([user, cards]) => {
  //       setCurrentUser(user)
  //       setCards(cards)
  //     })
  //     .catch(err => console.log(err))
  // }, [isLogged])

  // проверка токена
  React.useEffect(() => {
    // если у пользователя есть токен в localStorage, 
    // эта функция проверит, действующий он или нет
    if (localStorage.getItem('token')) {
      const jwt = localStorage.getItem('token')
      if (jwt) {
        // проверим токен
        auth.checkToken(jwt)
          .then((user) => {
            if (user) {
              console.log(user);
              // авторизуем пользователя
              setIsLogged(true)
              setCurrentUser(user)
              navigate("/movies", { replace: true })
            }
          })
          .catch(err => console.log(err))
      }
    } else {
      setIsLogged(false)
    }
  }, [isLogged])

  function handleRegisterUser(name, email, password) {
    auth.signup(name, email, password)
      .then((token) => {
        // console.log(token);
        // setInfoTooltipPopupOpen(true)
        // setTooltipImage(goodAuth)
        // setTooltipText('Вы успешно зарегистрировались!')
        localStorage.setItem('token', token.token)
        setIsLogged(true)
        navigate('/movies', { replace: true });
      })
      .catch(err => {
        // setInfoTooltipPopupOpen(true)
        // setTooltipImage(badAuth)
        // setTooltipText('Что-то пошло не так! Попробуйте ещё раз.')
        console.log(err)
      })
  }

  function handleLoginUser(email, password) {
    auth.signin(email, password)
      .then((token) => {
        if (token) {
          localStorage.setItem('token', token.token)
          setIsLogged(true)
          navigate('/movies', { replace: true })
        }
      })
      .catch(err => {
        // setInfoTooltipPopupOpen(true)
        // setTooltipImage(badAuth)
        // setTooltipText('Что-то пошло не так! Попробуйте ещё раз.')
        console.log(err)
      })
  }

  function userSignOut() {
    setIsLogged(false)
    localStorage.removeItem('token')
  }

  function handleUpdateUser(data) {
    auth.editProfile(data)
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((err) => console.log(err))
  }

  function handleMovieSearch(data) {
    moviesApi.getMovies(data)
      .then((films) => {
        setFilms(films)
      })
      .catch((err) => console.log(err))
  }

  console.log(films);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {/* <main className='main'> */}
        <Routes>
          {/* <Route path="*" element={<Navigate to={isLogged ? "/" : "/sign-in"} />} /> */}
          <Route path="/" element={<Main isLogged={isLogged} />} />
          <Route path="/movies" element={
            <>
              <ProtectedRoute
                element={Movies}
                isLogged={isLogged}
                onMovieSearch={handleMovieSearch}
                films={films}
              />
            </>
          } />
          <Route path="/saved-movies" element={
            <>
              <ProtectedRoute
                element={SavedMovies}
                isLogged={isLogged}
              />
            </>
          } />
          <Route path="/profile" element={
            <>
              <ProtectedRoute
                element={Profile}
                isLogged={isLogged}
                userSignOut={userSignOut}
                onUpdateUser={handleUpdateUser}
              />
            </>
          } />
          <Route path="/signin" element={<Login onLogin={handleLoginUser} />} />
          <Route path="/signup" element={<Register onRegister={handleRegisterUser} />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        {/* </main> */}
      </div >
    </CurrentUserContext.Provider>
  );
}

export default App;
