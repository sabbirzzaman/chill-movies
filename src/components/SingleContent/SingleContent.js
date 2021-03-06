import React from 'react';
import { useNavigate } from 'react-router-dom';
import { img_300, unavailable } from '../../config/config';

const SingleContent = ({ content }) => {
    const { id, title, name, poster_path } = content;

    const navigate = useNavigate();

    const contentDetails = () => {
        navigate(`/details-${id}`)
    }

    console.log(content)

    return (
        <div className="bg-gray-900 mx-auto mb-8">
            <img
                className="border border-b-0"
                src={`${img_300}/${poster_path}` || unavailable}
                alt={title || name}
            />

            <button onClick={contentDetails} className="w-full py-1 text-center bg-white text-black font-bold text-lg cursor-pointer transition-all delay-75 hover:bg-red-500 hover:text-white">
                Details
            </button>
        </div>
    );
};

export default SingleContent;
