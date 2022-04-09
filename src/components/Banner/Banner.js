import React from 'react';
import { img_1920 } from '../../config/config';

const Banner = ({ content, heading }) => {
    const { backdrop_path } = content;

    const heroStyle = {
        backgroundImage: `url(${img_1920}/${backdrop_path}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '350px',
        width: '100%',
    };

    return (
        <div className="h-full mt-[-100px]" style={heroStyle}>
            <div
                className="w-full h-full flex justify-center items-center"
                style={{ backgroundColor: 'rgb(0 0 0 / 70%)' }}
            >
                <h1 className="text-4xl md:text-5xl font-extrabold">
                    {heading}
                </h1>
            </div>
        </div>
    );
};

export default Banner;
