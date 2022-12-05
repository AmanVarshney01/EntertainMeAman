<script lang="ts">
	import { fade } from 'svelte/transition';
	export let poster_path: string;
	export let name: string;
	export let overview: string;
	export let genre: string;
	export let language: string;
	export let date: string;
	export let no_of_seasons: string;
	export let no_of_episodes: string;
	export let imdb_id: string;
	export let google_url: string;
	export let rotten_tomatoes_url: string;
	export let metacritic_url: string;
</script>

<div in:fade out:fade class=" flex flex-row mx-auto grow-0 h-auto lg:max-w-fit gap-2">
	<div class=" shadow-sm">
		<img
			class=" rounded-lg"
			src="https://image.tmdb.org/t/p/w342/{poster_path}"
			alt="{name} Poster"
		/>
	</div>
	<div class=" flex flex-col w-2/3 text-stone-800 bg-stone-100 rounded-lg gap-x-10 p-6 shadow-sm">
		<h1 class=" font-bold font-mono text-3xl my-4 select-all">{name}</h1>
		<div class="flex flex-row justify-around mx-auto text-center my-1 gap-5">
			<span>{genre}</span>
			<span>{language}</span>
			<span>{date}</span>
			<span>S: {no_of_seasons} Ep: {no_of_episodes}</span>
		</div>
		<p class=" text-left text-lg my-8">{overview}...</p>
		<div class=" flex flex-row gap-x-10 my-4 justify-center content-center">
			<a
				class="hover:border-b-2 border-cyan-700"
				href="https://www.imdb.com/title/{imdb_id}/"
				target="_blank"
				rel="noopener noreferrer"><img class=" w-14 h-auto" src="/imdblogo.svg" alt="IMDB" /></a
			>
			<a
				class="hover:border-b-2 border-cyan-700"
				href="https://www.google.com/search?q={google_url}"
				target="_blank"
				rel="noopener noreferrer"><img class=" w-20 h-auto" src="/googlelogo.svg" alt="Google" /></a
			>
			<a
				class="hover:border-b-2 border-cyan-700"
				href="https://www.rottentomatoes.com/tv/{rotten_tomatoes_url}"
				target="_blank"
				rel="noopener noreferrer"
				><img class=" w-24 h-auto" src="/Rotten_Tomatoes_logo.svg" alt="Rotten Tomatoes" /></a
			>
			<a
				class="hover:border-b-2 border-cyan-700"
				href="https://www.metacritic.com/tv/{metacritic_url}"
				target="_blank"
				rel="noopener noreferrer"
				><img class=" w-28 h-auto" src="/Metacritic_logo.svg" alt="Metacritic" /></a
			>
		</div>
	</div>
</div>
