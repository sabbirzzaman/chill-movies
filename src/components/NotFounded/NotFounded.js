import React from 'react';

const NotFounded = () => {
    return (
        <div>
            <h2 className="text-1xl sm:text-2xl md:text-4xl h-[80vh] flex items-center justify-center font-extrabold gap-3">
                <span>404</span>
                <span className="text-red-500">|</span>
                <span>Page Not Founded</span>
            </h2>
        </div>
    );
};

export default NotFounded;
