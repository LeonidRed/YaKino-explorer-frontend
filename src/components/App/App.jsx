import './App.css';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Main />
          </>
        } />
        {/* <Route path="/movies" element={<Movies />} /> */}
        {/* <Route path="/saved-movies" element={<SavedMovies />} /> */}
        <Route path="/profile" element={
          <>
            <Header />
            {/* <Profile />  */}
          </>
        } />
        {/* <Route path="/signin" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Register />} /> */}
      </Routes>
      <Footer />

    </div >
  );
}

export default App;
