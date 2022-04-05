import React from 'react';
import useContent from '../../hooks/useContent';
import SingleContent from '../SingleContent/SingleContent';

const Movies = () => {
    const urlLink = 'https://api.themoviedb.org/3/trending/movie/day?api_key=';

    const [movies] = useContent(urlLink);

    return (
        <div className='py-8 md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-3 lg:gap-8'>
            {movies.map((movie) => (
                <SingleContent key={movie.id} content={movie}></SingleContent>
            ))}
        </div>
    );
};

export default Movies;
