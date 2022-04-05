import React from 'react';
import { useNavigate } from 'react-router-dom';
import SingleContent from '../SingleContent/SingleContent';

const Trending = ({ content, title, directory }) => {
    const trending = content.slice(0, 6);
    const navigate = useNavigate();

    return (
        <div className="max-w-[325px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] text-center">
            <div className="flex justify-center items-center sm:justify-between sm:mb-8">
                <h2 className="text-2xl font-extrabold mb-8 sm:mb-0">{title}</h2>
                <button
                    onClick={() => navigate(directory)}
                    className="hidden sm:inline py px-6 md:px-10 text-center bg-white text-black font-bold cursor-pointer transition-all delay-75 hover:bg-red-500 hover:text-white"
                >
                    View All
                </button>
            </div>
            <div className="grid sm:grid-cols-2 sm:mb-10 md:grid-cols-3 md:gap-2 lg:grid lg:grid-cols-6 lg:gap-8">
                {trending.map((content) => (
                    <SingleContent
                        key={content.id}
                        content={content}
                    ></SingleContent>
                ))}
            </div>
            <button
                onClick={() => navigate(directory)}
                className="mb-10 py px-6 bg-white text-black font-bold cursor-pointer transition-all delay-75 hover:bg-red-500 hover:text-white sm:hidden"
            >
                View All
            </button>
        </div>
    );
};

export default Trending;
