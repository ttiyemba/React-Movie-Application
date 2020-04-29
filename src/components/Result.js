import React from 'react'

function Result({ result, openMoviePopUp}) {
    
    return (
        
        <div className="result" onClick={() => openMoviePopUp(result.imdbID)}>
            <img src={result.Poster}></img>
            <h3>{result.Title}</h3>
            
        </div>
    )
}

export default Result
