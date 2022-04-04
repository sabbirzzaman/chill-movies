import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(()=> {
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(data => setMovies(data.data.results))
    }, [])

    console.log(movies);

    return (
        <div>
            <h2>This is movies!!!</h2>
        </div>
    );
};

export default Movies;