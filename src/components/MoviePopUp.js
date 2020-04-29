import React from 'react'

function MoviePopUp({selectedMovie, closeMoviePopUp}) {
    return (
        <section className="popup">
            <div className="content">
                <h2>{ selectedMovie.Title } <span>({ selectedMovie.Year })</span></h2>
                <p className="rating">Rating: {selectedMovie.imdbRating}</p>
                <div className="plot">
                    <img src={selectedMovie.Poster}></img>
                    <p>{selectedMovie.Plot}</p>
                </div>

                <button className="close" onClick={closeMoviePopUp}>Close</button>

            </div>

        </section>
    )
}

export default MoviePopUp
