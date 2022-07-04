import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const fetchMovie = async () => {
        const responce = await fetch(
            'http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888'
        );
        const responceJson = await responce.json();
        console.log(responceJson);
        setMovies(responceJson.movieListResult.movieList);
        setLoading(false);
        return responceJson;
    };
    useEffect(() => {
        fetchMovie();
    }, []);

    return <div className="App">{loading ? <h1>Loading...</h1> : null}</div>;
}

export default App;
