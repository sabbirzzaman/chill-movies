import React from 'react';
import useContent from '../../hooks/useContent';
import SingleContent from '../SingleContent/SingleContent';

const TvSeries = () => {
    const urlLink = 'https://api.themoviedb.org/3/trending/tv/day?api_key=';
    const [tvSeries] = useContent(urlLink);

    return (
        <div className="max-w-[325px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
            <div className="py-8 md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-3 lg:gap-8">
                {tvSeries.map((tv) => (
                    <SingleContent key={tv.id} content={tv}></SingleContent>
                ))}
            </div>
        </div>
    );
};

export default TvSeries;
