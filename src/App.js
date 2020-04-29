import React, { useState } from 'react';
import axios from 'axios';

import Search from './components/Search';
import Results from './components/Results';
import MoviePopUp from './components/MoviePopUp'
function App() {
	const [ state, setState ] = useState({
		searchQuery: '',
		results: [],
		selectedMovie: {}
	});
	const apiUrl = 'http://www.omdbapi.com/?apikey=c3156098';

	const searchMovie = (e) => {
		if (e.key === 'Enter') {
			axios(apiUrl + '&s=' + state.searchQuery).then(({ data }) => {
				let searchResults = data.Search;

				setState((prevState) => {
					return { ...prevState, results: searchResults };
				});
			});
		}
	};

	const handleSearchInput = (e) => {
		let search = e.target.value;

		setState((prevState) => {
			return { ...prevState, searchQuery: search };
		});
	};

	const openMoviePopUp = (id) => {
		axios(apiUrl + '&i=' + id).then(({ data }) => {
      let movieSearch = data;
      
      

			setState((prevState) => {
				return { ...prevState, selectedMovie: movieSearch };
			});
		});
	};

	const closeMoviePopUp = () => {
		setState((prevState) => {
			return { ...prevState, selectedMovie: {} };
		});
	};
	return (
		<div className="App">
			<header>
				<h1> Movie Database</h1>
			</header>
			<main>
				<Search handleSearchInput={handleSearchInput} searchMovie={searchMovie} />
				<Results results={state.results} openMoviePopUp={openMoviePopUp}/>

        {(typeof state.selectedMovie.Title != "undefined") ? <MoviePopUp selectedMovie={state.selectedMovie} closeMoviePopUp={closeMoviePopUp} /> : false}
			</main>
		</div>
	);
}

export default App;
