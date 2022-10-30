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
		let random: number = movies[Math.floor(Math.random()*movies.length)]
		let data: any = await fetch(`https://api.themoviedb.org/3/movie/${random}?api_key=${apiKeyTmdb}`).then((x) => x.json());
		movie = {...data}
	};
	
	async function getGameDetails () {
		let random: string = games[Math.floor(Math.random() * games.length)]
		let data: any = await fetch(`https://rawg.io/api/games/${random}?key=${apiKeyRawg}`).then((x) => x.json())
		game = {...data}
	}

	async function getShowDetails () {
		let random: number = shows[Math.floor(Math.random() * shows.length)]
		let data: any = await fetch(`https://api.themoviedb.org/3/tv/${random}?api_key=${apiKeyTmdb}`).then((x) => x.json())
		show = {...data}
	}

	async function getAnimatedMovieDetails() {
		let random: number = animatedMovies[Math.floor(Math.random() * shows.length)]
		let data: any = await fetch(`https://api.themoviedb.org/3/movie/${random}?api_key=${apiKeyTmdb}`).then((x) => x.json())
		animatedMovie = {...data}
	}

	async function getAnimeDetails() {
		let random: number = animes[Math.floor(Math.random() * animes.length)]
		let data: any = await fetch(`https://api.themoviedb.org/3/tv/${random}?api_key=${apiKeyTmdb}`).then((x) => x.json())
		anime = {...data}
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
		} else if (currentSelected == 'animatedMovies') {
			getAnimatedMovieDetails()
		} else if (currentSelected == 'anime') {
			getAnimeDetails()
		}
		else {
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
	
		<h1>{show.name}</h1>
		<img class="w-auto h-3/5" src="https://image.tmdb.org/t/p/w342/{show.poster_path}" alt="{show.Title} Poster">

	</div>
	{/if}

	{#if game}
		<div>

			{game.name}
			<img class="w-96" src="{game.background_image}" alt="">

		</div>
	{/if}

	{#if animatedMovie}
		<div>

			<h1>{animatedMovie.title}</h1>
			<img class="w-auto h-3/5" src="https://image.tmdb.org/t/p/w342/{animatedMovie.poster_path}" alt="{animatedMovie.Title} Poster">

		</div>
	{/if}

	{#if anime}
		<div>

			<h1>{anime.name}</h1>
			<img class="w-auto h-3/5" src="https://image.tmdb.org/t/p/w342/{anime.poster_path}" alt="{anime.Title} Poster">

		</div>
	{/if}

	<button on:click={getDetails}>Entertain Me Aman</button>

	<div class="">
		<button on:click={() => {currentSelected = 'movies'}}>Movies</button>
		<button on:click={() => {currentSelected = 'shows'}}>Shows</button>
		<button on:click={() => {currentSelected = 'animatedMovies'}}>Animated Movies</button>
		<button on:click={() => {currentSelected = 'anime'}}>Anime</button>
		<button on:click={() => {currentSelected = 'games'}}>Games</button>
	</div>

</div>

  
