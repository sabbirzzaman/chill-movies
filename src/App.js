import { Route, Routes } from 'react-router-dom';
import TvSeries from './components/TvSeries/TvSeries';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import WatchLater from './components/WatchLater/WatchLater';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='movies' element={<Movies></Movies>}></Route>
        <Route path='tv-series' element={<TvSeries></TvSeries>}></Route>
        <Route path='watch-later' element={<WatchLater></WatchLater>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
