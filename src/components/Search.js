import React from 'react'

function Search({ handleSearchInput, searchMovie}) {
    return (
        <section className="searchbox-wrap">

            <input type="text" 
            placeholder="Search for a movie" 
            className="searchbox" onChange={handleSearchInput}
            onKeyPress={searchMovie}>
            </input>
        </section>
    )
}

export default Search
