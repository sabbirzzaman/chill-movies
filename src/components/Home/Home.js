import React from 'react';
import useContent from '../../hooks/useContent';
import Hero from '../Hero/Hero';
import Trending from '../Trending/Trending';

const Home = () => {
    const moviesLink =
        'https://api.themoviedb.org/3/trending/movie/day?api_key=';
    const seriesLink = 'https://api.themoviedb.org/3/trending/tv/day?api_key=';

    const [movies] = useContent(moviesLink);
    const [series] = useContent(seriesLink);

    const latestMovie = movies.slice(0, 1);

    return (
        <div>
            {latestMovie.map((movie) => (
                <Hero key={movie.id} movies={movie}></Hero>
            ))}

            <div className="pt-20 pb-18">
                <Trending
                    content={movies}
                    title="Trending Movies"
                    directory="/movies"
                ></Trending>

                <Trending
                    content={series}
                    title="Trending Tv Series"
                    directory="/tv-series"
                ></Trending>
            </div>
        </div>
    );
};

export default Home;
