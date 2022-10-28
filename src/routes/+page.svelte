<script lang="ts">

	import {movies, shows, animatedMovies, games, animes} from "../data.json";

	const apiKeyTmdb = '0f30077ee9f1be6f1d82b08eb555e7af'
	const apiKeyRawg = 'cad2990e2205456cadc2e24ab207f45a'
	// let data: any;
	let movie: any
	let game: any
	let anime: any
	let animatedMovie: any
	let show: any

	async function getMovieDetails () {
		let random: string = movies[Math.floor(Math.random()*movies.length)]
			let data: any = await fetch(`https://api.themoviedb.org/3/movie/${random}?api_key=${apiKeyTmdb}`).then((x) => x.json());
		movie = {...data}
	};
	
	async function getGameDetails () {
		let random: string = games[Math.floor(Math.random() * games.length)]
		let data: any = await fetch(`https://rawg.io/api/games/${random}?key=${apiKeyRawg}`).then((x) => x.json())
		game = {...data}
	}

	async function getShowDetails () {
		let random: string = shows[Math.floor(Math.random() * shows.length)]
		let data: any = await fetch(`https://api.themoviedb.org/3/movie/${random}?api_key=${apiKeyTmdb}`).then((x) => x.json())
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
			getGameDetails()
		} else if (currentSelected == 'shows') {
			getShowDetails()
		} else {
			getMovieDetails()
		}
	}
	
	// https://rawg.io/api/games/far-cry-3?key=cad2990e2205456cadc2e24ab207f45a

</script>


<div class="min-h-screen flex flex-col justify-center items-center">

	{#if movie}
	<div>
	
		<h1>{movie.title}</h1>
		<img class="w-auto h-3/5" src="https://image.tmdb.org/t/p/w342/{movie.poster_path}" alt="{movie.Title} Poster">


	</div>
	{/if}

	{#if show}
	<div>
	
		<img class="w-auto h-3/5" src="{show.Poster}" alt="{show.Title} Poster">
		<h1>{show.Title}</h1>

	</div>
	{/if}

	{#if game}
		<div>

			{game.name}
			<img class="w-96" src="{game.background_image}" alt="">

		</div>
	{/if}

	<button on:click={getDetails}>Entertain Me Aman</button>

	<div class="">
		<button on:click={() => {currentSelected = 'movies'}}>Movies</button>
		<button on:click={() => {currentSelected = 'shows'}}>Shows</button>
		<button on:click={() => {currentSelected = 'amovies'}}>Animated Movies</button>
		<button on:click={() => {currentSelected = 'anime'}}>Anime</button>
		<button on:click={() => {currentSelected = 'games'}}>Games</button>
	</div>

</div>

  
