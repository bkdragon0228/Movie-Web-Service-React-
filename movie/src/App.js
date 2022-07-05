import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const API_URL = 'https://api.themoviedb.org/3';
    const API_KEY = 'a5a1eb270fa002cab6c71bb37180961c';
    const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

    const fetchMovie = async () => {
        const responce = await fetch(
            `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        );
        const json = await responce.json();
        setMovies([...json.results]);
        setLoading(false);
    };

    useEffect(() => {
        fetchMovie();
    }, []);

    return (
        <div className="App">
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <img
                                src={`${IMAGE_BASE_URL}w500/${movie.backdrop_path}`}
                            />
                            <h2>{movie.title}</h2>
                            <p>{movie.overview}</p>
                            {/* <ul>{}</ul> */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
