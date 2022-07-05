import { useEffect, useState } from 'react';
import Movie from '../component/Movie';
import { API_KEY, API_URL } from '../Config';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

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
                        <Movie movieArr={movie} key={movie.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
