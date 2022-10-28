<script lang="ts">

	import {movies, series, animatedMovies, anime, games} from "../data.json";

	const apiKey = '2c710afd'
	let data: any;
	let movie: any;

	async function getMovieDetails () {
		let random: string = movies[Math.floor(Math.random()*movies.length)]
		data = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${random}`).then((x) => x.json());
		movie = {...data}
	};
	
	// https://rawg.io/api/games/far-cry-3?key=cad2990e2205456cadc2e24ab207f45a

</script>


<div class="min-h-screen flex flex-col-reverse justify-center items-center">
	<button on:click={getMovieDetails}>Entertain Me Aman</button>
	{#if movie}
	<div>
			<!-- {JSON.stringify(movie)} -->
		<img class="h-1/4 w-auto" src="{movie.Poster}" alt="{movie.Title} Poster">
		<h1>{movie.Title}</h1>

	</div>
	
	{/if}
</div>

  
