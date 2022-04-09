import React from 'react';
import { img_1920 } from '../../config/config';

const Hero = ({ movies }) => {
    const { backdrop_path, title, overview } = movies;

    const shortTitle = title.split(':')[0];
    const shortOverview = overview.slice(0, 170);

    const heroStyle = {
        backgroundImage: `url(${img_1920}/${backdrop_path}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '620px',
        width: '100%',
    };
    
    return (
        <div className="h-full mt-[-100px]" style={heroStyle}>
            <div
                className="w-full h-full p-4 text-center flex justify-center items-center flex-col"
                style={{ backgroundColor: 'rgb(0 0 0 / 70%)' }}
            >
                <h1 title={title} className="md:w-[800px] text-3xl sm:text-5xl font-extrabold mb-2 md:text-6xl md:mb-4">{shortTitle}</h1>
                <p title={overview} className="mb-3 px-4 sm:w-[600px] md:text-lg md:mb-4">{shortOverview}...</p>
                <button className="py px-6 md:px-10 text-center bg-white text-black font-bold text-base cursor-pointer transition-all delay-75 hover:bg-red-500 hover:text-white">
                    Details
                </button>
            </div>
        </div>
    );
};

export default Hero;
