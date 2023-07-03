import logo from './logo.svg';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import PagenotFound from './Components/PagenotFound/PagenotFound';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Header />
        <Routes>
              <Route path='/' element = {<Home />}>  </Route>
              <Route path='/movie/:imdbID' element = {<MovieDetails />}>  </Route>
              <Route path='*' element = {<PagenotFound   />}>  </Route>
        </Routes>
    <Footer />
    </>
  );
}

export default App;
