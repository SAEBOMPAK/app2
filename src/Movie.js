import React from "react";
import PropTypes from "prop-types";
import './Movie.css';

//component가 state가 필요없을 경우 class component가 될필요가 없음
function Movie({year, title, summary, poster, genres}) {
    return (
    <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="genres">
                {genres.map((genre, index) => ( //map안에는 unique한 key가 있어야 함 근데 여기는 id가 없기때문에 array안에 있는 index사용
                    <li key={index} className="genres_genre">
                        {genre}
                    </li>
                ))}
            </ul>
            <p className="movie_summary">{summary.slice(0,180)}...</p>
        </div>
    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;