import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL } from '../Config';
import styles from '../component/Movie.module.css';

function Movie({ movieArr }) {
    return (
        <div className={styles.movie}>
            <img
                src={`${IMAGE_BASE_URL}w500/${movieArr.backdrop_path}`}
                alt={movieArr.title}
            />
            <h2 className={styles.movie__title}>
                <Link to={`/movie/${movieArr.id}`}>{movieArr.title}</Link>
            </h2>
            <h3 className={styles.movie__year}>{movieArr.year}</h3>
            <p>{movieArr.overview}</p>
        </div>
    );
}

export default Movie;
