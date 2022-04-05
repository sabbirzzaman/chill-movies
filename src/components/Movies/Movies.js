import React from 'react';
import useContent from '../../hooks/useContent';
import SingleMovie from '../SingleMovie/SingleMovie';

const Movies = () => {
    const urlLink = 'https://api.themoviedb.org/3/trending/movie/day?api_key=';

    const [movies] = useContent(urlLink);

    return (
        <div className=''>
            {movies.map((movie) => (
                <SingleMovie key={movie.id} movie={movie}></SingleMovie>
            ))}
        </div>
    );
};

export default Movies;
