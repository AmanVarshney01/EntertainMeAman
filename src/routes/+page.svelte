<script lang="ts">

	import {movies, shows, animatedMovies, games, animes} from "../data.json";

	const apiKeyOmdb = '2c710afd'
	const apiKeyRawg = 'cad2990e2205456cadc2e24ab207f45a'
	// let data: any;
	let movie: any
	let game: any
	let anime: any
	let animatedMovie: any
	let show: any

	async function getMovieDetails () {
		let random: string = movies[Math.floor(Math.random()*movies.length)]
		let data: any = await fetch(`https://www.omdbapi.com/?apikey=${apiKeyOmdb}&t=${random}`).then((x) => x.json());
		movie = {...data}
	};
	
	async function getGamesDetails () {
		let random: string = games[Math.floor(Math.random() * games.length)]
		let data: any = await fetch(`https://rawg.io/api/games/${random}?key=${apiKeyRawg}`).then((x) => x.json())
		game = {...data}
	}

	async function getShowsDetails () {
		let random: string = shows[Math.floor(Math.random() * shows.length)]
		let data: any = await fetch(`https://www.omdbapi.com/?apikey=${apiKeyOmdb}&t=${random}`).then((x) => x.json())
		show = {...data}
	}

	let currentSelected: string;

	const getDetails = () => {
		movie = 0
		show = 0
		animatedMovie = 0
		game = 0
		anime = 0
		if (currentSelected == 'movies') {
			getMovieDetails()
		} else if (currentSelected == 'games') {
			getGamesDetails()
		} else if (currentSelected == 'shows') {
			getShowsDetails()
		} else {
			getShowsDetails()
		}
	}
	
	// https://rawg.io/api/games/far-cry-3?key=cad2990e2205456cadc2e24ab207f45a

</script>


<div class="min-h-screen flex flex-col-reverse justify-center items-center">

	<button on:click={getDetails}>Entertain Me Aman</button>

	<div class="flex justify-between">
		<button on:click={() => {currentSelected = 'movies'}}>Movies</button>
		<button on:click={() => {currentSelected = 'shows'}}>Shows</button>
		<button on:click={() => {currentSelected = 'amovies'}}>Animated Movies</button>
		<button on:click={() => {currentSelected = 'anime'}}>Anime</button>
		<button on:click={() => {currentSelected = 'games'}}>Games</button>
	</div>

	{#if movie}
	<div>
			<!-- {JSON.stringify(movie)} -->
		<img class="h-1/4 w-auto" src="{movie.Poster}" alt="{movie.Title} Poster">
		<h1>{movie.Title}</h1>

	</div>
	{/if}

	{#if show}
	<div>
	
		<img class="h-1/4 w-auto" src="{show.Poster}" alt="{show.Title} Poster">
		<h1>{show.Title}</h1>

	</div>
	{/if}


</div>

  
