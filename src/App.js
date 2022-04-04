import { Route, Routes } from 'react-router-dom';
import './App.css';
import TvSeries from './components/TvSeries/TvSeries';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import WatchLater from './components/WatchLater/WatchLater';

function App() {
  return (
    <div className='max-w-[1140px] mx-auto'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Movies></Movies>}></Route>
        <Route path='movies' element={<Movies></Movies>}></Route>
        <Route path='tv-series' element={<TvSeries></TvSeries>}></Route>
        <Route path='watch-later' element={<WatchLater></WatchLater>}></Route>
      </Routes>
    </div>
  );
}

export default App;
