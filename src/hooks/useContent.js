import axios from "axios";
import { useEffect, useState } from "react";

const useContent = (urlLink) => {
    const [contents, setContents] = useState([]);

    const url = urlLink;

    useEffect(() => {
        axios
            .get(`${url}${process.env.REACT_APP_API_KEY}`)
            .then((data) => setContents(data.data.results));
    }, []);

    return [contents, setContents]
}

export default useContent;