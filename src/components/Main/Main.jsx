import './Main.css'
import Header from "../Header/Header";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import HeaderLogin from '../Movies/HeaderLogin/HeaderLogin';

export default function Main(props) {

  console.log(props);

  return (
    <>
      {props.isLogged ? <HeaderLogin isLogged={props.isLogged} /> : <Header />}
      {/* <Header /> */}
      <main className="content">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};