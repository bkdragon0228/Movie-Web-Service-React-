import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, API_URL } from '../Config';

function Detail() {
    const { id } = useParams();

    const [detail, setDetail] = useState(null);

    const getMovieDetail = async () => {
        const responce = await fetch(
            `${API_URL}movie/${id}?api_key=${API_KEY}`
        );
        console.log(responce);
        // const json = await responce.json();

        // console.log(json);
        // setDetail(json);
    };

    useEffect(() => {
        getMovieDetail();
    }, []);

    return (
        <div>
            <h1>hi</h1>
            {detail}
        </div>
    );
}

export default Detail;
