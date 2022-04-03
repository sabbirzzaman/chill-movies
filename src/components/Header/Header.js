import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Header = () => {
    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={{ color: match ? '#ef4444' : '#FFF' }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }

    return (
        <nav className="flex justify-between align-middle py-6">
            <div>
                <Link className="text-2xl font-bold text-red-500" to="/">
                    Movie Chill
                </Link>
            </div>

            <div className="flex gap-8 align-middle">
                <CustomLink
                    className="hover:text-red-500 transition-all delay-75"
                    to="/movies"
                >
                    Movies
                </CustomLink>
                <CustomLink
                    className="hover:text-red-500 transition-all delay-75"
                    to="/tv-series"
                >
                    Tv Series
                </CustomLink>
                <p className="hover:text-red-500 transition-all delay-75">
                    Watch Letter
                </p>
            </div>
        </nav>
    );
};

export default Header;
