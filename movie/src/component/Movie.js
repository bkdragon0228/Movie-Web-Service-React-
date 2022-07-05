function Movie({ movieArr }) {
    const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

    return (
        <div key={movieArr.id}>
            <img
                src={`${IMAGE_BASE_URL}w500/${movieArr.backdrop_path}`}
                alt={movieArr.title}
            />
            <h2>{movieArr.title}</h2>
            <p>{movieArr.overview}</p>
        </div>
    );
}

export default Movie;
