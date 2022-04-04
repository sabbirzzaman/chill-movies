import { faBars, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);

    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={{ color: match ? '#ef4444' : '' }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }

    console.log(open);

    return (
        <nav className="flex justify-between items-center py-4 lg:py-8">
            <div className="z-10">
                <Link className="text-2xl font-extrabold text-red-500" to="/">
                    Movie Chill
                </Link>
            </div>

            <div className="z-10">
                <FontAwesomeIcon
                    onClick={() => setOpen(!open)}
                    className="z-10 lg:hidden cursor-pointer"
                    icon={faBars}
                ></FontAwesomeIcon>
            </div>
            <div
                className={
                    open
                        ? 'absolute top-0 left-0 w-full flex justify-end flex-col items-center h-[25%] pb-4 pt-8 gap-1 bg-black'
                        : 'hidden lg:flex gap-6'
                }
            >
                <CustomLink
                    className="hover:text-red-500 font-bold transition-all delay-75"
                    to="/movies"
                >
                    Movies
                </CustomLink>
                <CustomLink
                    className="hover:text-red-500 font-bold transition-all delay-75"
                    to="/tv-series"
                >
                    Tv Series
                </CustomLink>
                <CustomLink
                    className="hover:text-red-500 font-bold transition-all delay-75 flex gap-2 items-center"
                    to="/watch-later"
                >
                    Watch Later
                    <FontAwesomeIcon
                        className="hidden lg:inline"
                        icon={faClock}
                    ></FontAwesomeIcon>
                </CustomLink>
            </div>
        </nav>
    );
};

export default Header;
