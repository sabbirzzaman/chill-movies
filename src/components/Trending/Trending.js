import React from 'react';
import { useNavigate } from 'react-router-dom';
import SingleContent from '../SingleContent/SingleContent';

const Trending = ({ content, title, directory }) => {
    const trending = content.slice(0, 3);
    const navigate = useNavigate();
    console.log(directory)

    return (
        <div className="max-w-[325px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-extrabold">{title}</h2>
                <button
                    onClick={() => navigate(directory)}
                    className="py px-6 md:px-10 text-center bg-white text-black font-bold text-base cursor-pointer transition-all delay-75 hover:bg-red-500 hover:text-white"
                >
                    View All
                </button>
            </div>
            <div className="py-8 md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-3 lg:gap-8">
                {trending.map((content) => (
                    <SingleContent
                        key={content.id}
                        content={content}
                    ></SingleContent>
                ))}
            </div>
        </div>
    );
};

export default Trending;
