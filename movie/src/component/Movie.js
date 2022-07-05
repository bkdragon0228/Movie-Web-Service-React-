import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL } from '../Config';

function Movie({ movieArr }) {
    return (
        <div key={movieArr.id}>
            <img
                src={`${IMAGE_BASE_URL}w500/${movieArr.backdrop_path}`}
                alt={movieArr.title}
            />
            <h2>
                <Link to={`/movie/${movieArr.id}`}>{movieArr.title}</Link>
            </h2>
            <p>{movieArr.overview}</p>
        </div>
    );
}

export default Movie;
