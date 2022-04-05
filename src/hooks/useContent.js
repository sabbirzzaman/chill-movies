import axios from "axios";
import { useEffect, useState } from "react";

const useContent = (urlLink) => {
    const [movies, setMovies] = useState([]);

    const url = urlLink;

    useEffect(() => {
        axios
            .get(`${url}${process.env.REACT_APP_API_KEY}`)
            .then((data) => setMovies(data.data.results));
    }, []);

    return [movies, setMovies]
}

export default useContent;