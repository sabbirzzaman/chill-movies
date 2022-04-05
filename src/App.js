import { Route, Routes } from 'react-router-dom';
import './App.css';
import TvSeries from './components/TvSeries/TvSeries';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import WatchLater from './components/WatchLater/WatchLater';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='max-w-[325px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Movies></Movies>}></Route>
        <Route path='movies' element={<Movies></Movies>}></Route>
        <Route path='tv-series' element={<TvSeries></TvSeries>}></Route>
        <Route path='watch-later' element={<WatchLater></WatchLater>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
