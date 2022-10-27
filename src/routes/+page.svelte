<script lang="ts">

	import {movies} from "../data.json";

	const apiKey = '2c710afd'
	let data: any;
	let movie: any = {};

	async function getDetails () {
		let randomMovie = movies[Math.floor(Math.random()*movies.length)]
		data = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${randomMovie}`).then((x) => x.json());
		movie = {...data}
	};

	// getDetails('Breaking_Bad')
</script>

<div class="">
	<h1><button on:click={getDetails}>Entertain Me Aman</button></h1>

	<p>
		{JSON.stringify(movie)}
  		{movie.Title}
	</p>
	<img class="h-1/4 w-auto" src="{movie.Poster}" alt="{movie.Title} Poster">
</div>

  
