import { useEffect, useState } from 'react';
import Movie from '../component/Movie';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const API_URL = 'https://api.themoviedb.org/3';
    const API_KEY = 'a5a1eb270fa002cab6c71bb37180961c';

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
