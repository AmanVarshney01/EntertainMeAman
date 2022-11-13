<script lang="ts">
	import MoviePanel from './Components/moviePanel.svelte';
	import TvPanel from './Components/tvPanel.svelte';
	import { getFormattedDate, removeSpaces } from './utils';
	import { fly } from 'svelte/transition';
	import { movies, shows, animatedMovies, animes } from '../data.json';
	import { backOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { API_KEY_TMDB, SESSION_ID } from '$lib/Env'

	const apiKeyTmdb = API_KEY_TMDB;
	const sessionId = SESSION_ID

	let initialAnimate = false;

	onMount(() => (initialAnimate = true));

	let movie: any;
	let anime: any;
	let animatedMovie: any;
	let show: any;
	let element: any = 0;

	let currentSelected: string;
	let movieDetails: any;
	let animatedMovieDetails: any;
	let showDetails: any;
	let animeDetails: any;

	async function getMovieDetails() {
		let movieList: number[] = [];
		let favMovieData: any = await fetch(
			`https://api.themoviedb.org/3/account/15335112/favorite/movies?api_key=${apiKeyTmdb}&session_id=${sessionId}`
		).then((x) => x.json());
		let dataCopy = {...favMovieData}
		for (let i = 0; i < dataCopy.total_results; i++) {
			movieList.push(dataCopy.results[i].id)
		}
		const random: number = movieList[Math.floor(Math.random() * movieList.length)];
		const movieData: any = await fetch(
			`https://api.themoviedb.org/3/movie/${random}?api_key=${apiKeyTmdb}`
		).then((x) => x.json());
		movie = { ...movieData };
		movieDetails = {
			title: movie.title,
			poster_path: movie.poster_path,
			genre: movie.genres[0].name,
			language: movie.spoken_languages[0].english_name,
			date: getFormattedDate(movie.release_date),
			runtime: movie.runtime,
			overview: movie.overview.substring(0, 200),
			imdb_id: movie.imdb_id,
			google_url: removeSpaces(movie.title, ' ', '+'),
			rotten_tomatoes_url: removeSpaces(movie.title, ' ', '_'),
			metacritic_url: removeSpaces(movie.title, ' ', '-')
		};
		element = document.getElementById('button1');
		element.style.borderBottom = 'thick solid #4BB543';
		element.style.borderRadius = '8px';
		// element.style.borderImage = 'linear-gradient(to right, red, rgba(0, 0, 0, 0)) 1 100%;';
	}

	async function getShowDetails() {
		let showList: number[] = [];
		let favShowData: any = await fetch(
			`https://api.themoviedb.org/3/account/15335112/favorite/tv?api_key=${apiKeyTmdb}&session_id=${sessionId}`
		).then((x) => x.json());
		let dataCopy = {...favShowData}
		for (let i = 0; i < dataCopy.total_results; i++) {
			showList.push(dataCopy.results[i].id)
		}
		const random: number = showList[Math.floor(Math.random() * showList.length)];
		const showData: any = await fetch(
			`https://api.themoviedb.org/3/tv/${random}?api_key=${apiKeyTmdb}&append_to_response=external_ids`
		).then((x) => x.json());
		show = { ...showData };
		showDetails = {
			name: show.name,
			poster_path: show.poster_path,
			genre: show.genres[0].name,
			language: show.spoken_languages[0].english_name,
			date: getFormattedDate(show.first_air_date),
			no_of_seasons: show.number_of_seasons,
			no_of_episodes: show.number_of_episodes,
			overview: show.overview.substring(0, 200),
			imdb_id: show.external_ids.imdb_id,
			google_url: removeSpaces(show.name, ' ', '+'),
			rotten_tomatoes_url: removeSpaces(show.name, ' ', '_'),
			metacritic_url: removeSpaces(show.name, ' ', '-')
		};
		element = document.getElementById('button2');
		element.style.borderBottom = 'thick solid #4BB543';
		element.style.borderRadius = '8px';
	}

	async function getAnimatedMovieDetails() {
		let animatedMovieList: number[] = [];
		let favAnimatedMovieData: any = await fetch(
			`https://api.themoviedb.org/3/account/15335112/watchlist/movies?api_key=${apiKeyTmdb}&session_id=${sessionId}`
		).then((x) => x.json());
		let dataCopy = {...favAnimatedMovieData}
		for (let i = 0; i < dataCopy.total_results; i++) {
			animatedMovieList.push(dataCopy.results[i].id)
		}
		const random: number = animatedMovieList[Math.floor(Math.random() * animatedMovieList.length)];
		const data: any = await fetch(
			`https://api.themoviedb.org/3/movie/${random}?api_key=${apiKeyTmdb}`
		).then((x) => x.json());
		animatedMovie = { ...data };
		animatedMovieDetails = {
			title: animatedMovie.title,
			poster_path: animatedMovie.poster_path,
			genre: animatedMovie.genres[0].name,
			language: animatedMovie.spoken_languages[0].english_name,
			date: getFormattedDate(animatedMovie.release_date),
			runtime: animatedMovie.runtime,
			overview: animatedMovie.overview.substring(0, 200),
			imdb_id: animatedMovie.imdb_id,
			google_url: removeSpaces(animatedMovie.title, ' ', '+'),
			rotten_tomatoes_url: removeSpaces(animatedMovie.title, ' ', '_'),
			metacritic_url: removeSpaces(animatedMovie.title, ' ', '-')
		};
		element = document.getElementById('button3');
		element.style.borderBottom = 'thick solid #4BB543';
		element.style.borderRadius = '8px';
	}

	async function getAnimeDetails() {
		let animeList: number[] = [];
		let favAnimeData: any = await fetch(
			`https://api.themoviedb.org/3/account/15335112/watchlist/tv?api_key=${apiKeyTmdb}&session_id=${sessionId}`
		).then((x) => x.json());
		let dataCopy = {...favAnimeData}
		for (let i = 0; i < dataCopy.total_results; i++) {
			animeList.push(dataCopy.results[i].id)
		}
		const random: number = animeList[Math.floor(Math.random() * animeList.length)];
		const data: any = await fetch(
			`https://api.themoviedb.org/3/tv/${random}?api_key=${apiKeyTmdb}&append_to_response=external_ids`
		).then((x) => x.json());
		anime = { ...data };
		animeDetails = {
			name: anime.name,
			poster_path: anime.poster_path,
			genre: anime.genres[0].name,
			language: anime.spoken_languages[0].english_name,
			date: getFormattedDate(anime.first_air_date),
			no_of_seasons: anime.number_of_seasons,
			no_of_episodes: anime.number_of_episodes,
			overview: anime.overview.substring(0, 200),
			imdb_id: anime.external_ids.imdb_id,
			google_url: removeSpaces(anime.name, ' ', '+'),
			rotten_tomatoes_url: removeSpaces(anime.name, ' ', '_'),
			metacritic_url: removeSpaces(anime.name, ' ', '-')
		};
		element = document.getElementById('button4');
		element.style.borderBottom = 'thick solid #4BB543';
		element.style.borderRadius = '8px';
	}

	const deleteData = () => {
		movie = 0;
		show = 0;
		animatedMovie = 0;
		anime = 0;
		element.style.border = null;
	};

	const getDetails = () => {
		if (currentSelected == 'movies') {
			getMovieDetails();
		} else if (currentSelected == 'shows') {
			getShowDetails();
		} else if (currentSelected == 'animatedMovies') {
			getAnimatedMovieDetails();
		} else if (currentSelected == 'anime') {
			getAnimeDetails();
		} else {
			getMovieDetails();
		}
		deleteData();
	};
</script>

<div
	class=" relative h-screen w-full flex flex-col justify-center text-center bg-cover bg-black"
	style="background-image: url('/no_roller.png');"
>
	<img class=" absolute bottom-28 left-10 animate-spin w-auto h-auto" src="/roller1.png" alt="" />
	<div class=" flex flex-col w-3/4 mx-auto gap-4">
		{#if movie}
			<MoviePanel {...movieDetails} />
		{:else if show}
			<TvPanel {...showDetails} />
		{:else if animatedMovie}
			<MoviePanel {...animatedMovieDetails} />
		{:else if anime}
			<TvPanel {...animeDetails} />
		{:else}
			<div class="" />
		{/if}

		{#if initialAnimate}
			<div class=" font-bold text-cyan-700 text-8xl rounded-2xl grow-0 m-5">
				<button
					on:click={getDetails}
					class=" hover:text-transparent delay-100 transition bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400 cursor-pointer"
					>Entertain Me Aman</button
				>
			</div>

			<div class="flex flex-row gap-2 justify-center grow-0">
				<div
					transition:fly={{
						y: 50,
						delay: 300,
						easing: backOut
					}}
					id="button1"
					class=" hover:scale-110 delay-75 transition p-0.5"
				>
					<button
						class="font-bold rounded bg-cyan-900 text-white px-4 py-2 cursor-pointer"
						on:click={() => {
							currentSelected = 'movies';
						}}>Movies</button
					>
				</div>
				<div
					transition:fly={{
						y: 50,
						delay: 400,
						easing: backOut
					}}
					id="button2"
					class=" hover:scale-110 delay-75 transition p-0.5"
				>
					<button
						class="font-bold rounded bg-lime-900 text-white px-4 py-2 cursor-pointer"
						on:click={() => {
							currentSelected = 'shows';
						}}>Shows</button
					>
				</div>
				<div
					transition:fly={{
						y: 50,
						delay: 500,
						easing: backOut
					}}
					id="button3"
					class=" hover:scale-110 delay-75 transition p-0.5"
				>
					<button
						class="font-bold rounded bg-orange-900 text-white px-4 py-2 cursor-pointer"
						on:click={() => {
							currentSelected = 'animatedMovies';
						}}>Animated Movies</button
					>
				</div>
				<div
					transition:fly={{
						y: 50,
						delay: 600,
						easing: backOut
					}}
					id="button4"
					class=" hover:scale-110 delay-75 transition p-0.5"
				>
					<button
						class="font-bold rounded bg-emerald-900 text-white px-4 py-2 cursor-pointer"
						on:click={() => {
							currentSelected = 'anime';
						}}>Anime</button
					>
				</div>
			</div>
		{/if}
	</div>
</div>
