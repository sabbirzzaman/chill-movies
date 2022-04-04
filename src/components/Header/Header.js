import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Header = () => {
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

    return (
        <nav className="flex justify-between  items-center py-6">
            <div>
                <Link className="text-2xl font-extrabold text-red-500" to="/">
                    Movie Chill
                </Link>
            </div>

            <div className="flex gap-8  items-center">
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
                >Watch Later<FontAwesomeIcon icon={faClock}></FontAwesomeIcon></CustomLink>
            </div>
        </nav>
    );
};

export default Header;
