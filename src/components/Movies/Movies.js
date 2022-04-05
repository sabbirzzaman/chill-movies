import React from 'react';
import useContent from '../../hooks/useContent';
import SingleContent from '../SingleContent/SingleContent';

const Movies = () => {
    const urlLink = 'https://api.themoviedb.org/3/trending/movie/day?api_key=';
    const [movies] = useContent(urlLink);

    return (
        <div className='max-w-[325px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]'>
            <div className="py-8 grid sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid lg:grid-cols-4 lg:gap-8">
                {movies.map((movie) => (
                    <SingleContent
                        key={movie.id}
                        content={movie}
                    ></SingleContent>
                ))}
            </div>
        </div>
    );
};

export default Movies;
