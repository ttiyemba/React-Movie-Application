import React from 'react'

import Result from './Result'

function Results({ results, openMoviePopUp}) {
    return (
        <section className="results">

            {results.map(result => (
                <Result key={result.imdbID} result={result}  openMoviePopUp={openMoviePopUp}/>
            ))}

        </section>
    )
}

export default Results
