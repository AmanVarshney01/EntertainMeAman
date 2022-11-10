<script lang="ts">
	import { movies, shows, animatedMovies, games, animes } from '../data.json';

	const apiKeyTmdb = '0f30077ee9f1be6f1d82b08eb555e7af';

	let movie: any;
	let game: any;
	let anime: any;
	let animatedMovie: any;
	let show: any;
	let element: any = 0;

	let currentSelected: string;

	async function getMovieDetails() {
		const random: number = movies[Math.floor(Math.random() * movies.length)];
		const data: any = await fetch(
			`https://api.themoviedb.org/3/movie/${random}?api_key=${apiKeyTmdb}`
		).then((x) => x.json());
		movie = { ...data };
		element = document.getElementById('button1');
		element.style.border = '2.5px dashed #4BB543';
		// element.style.boxShadow = '120px 80px 20px #0ff'
	}

	async function getShowDetails() {
		const random: number = shows[Math.floor(Math.random() * shows.length)];
		const data: any = await fetch(
			`https://api.themoviedb.org/3/tv/${random}?api_key=${apiKeyTmdb}&append_to_response=external_ids`
		).then((x) => x.json());
		show = { ...data };
	}

	async function getAnimatedMovieDetails() {
		const random: number = animatedMovies[Math.floor(Math.random() * shows.length)];
		const data: any = await fetch(
			`https://api.themoviedb.org/3/movie/${random}?api_key=${apiKeyTmdb}`
		).then((x) => x.json());
		animatedMovie = { ...data };
	}

	async function getAnimeDetails() {
		const random: number = animes[Math.floor(Math.random() * animes.length)];
		const data: any = await fetch(
			`https://api.themoviedb.org/3/tv/${random}?api_key=${apiKeyTmdb}&append_to_response=external_ids`
		).then((x) => x.json());
		anime = { ...data };
	}

	const deleteData = () => {
		movie = 0;
		show = 0;
		animatedMovie = 0;
		game = 0;
		anime = 0;
		element.style.border = null;
	};

	const getDetails = () => {
		if (currentSelected == 'movies') {
			getMovieDetails();
		}
		// else if (currentSelected == 'games') {
		// 	getGameDetails();
		// }
		else if (currentSelected == 'shows') {
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

	const getFormattedDate = (d: string) => {
		let date = new Date(d);
		return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
	};

	const removeSpaces = (string: string, target: string, replacement: string) => {
		for (let i = 0; i < string.length; i++) {
			string = string.replace(target, replacement);
		}
		return string.toLowerCase();
	};

	// https://rawg.io/api/games/far-cry-3?key=cad2990e2205456cadc2e24ab207f45a
</script>

<div class=" h-screen w-full flex flex-col justify-center text-center bg-neutral-200">
	<div class=" flex flex-col w-3/4 mx-auto gap-4">
		{#if movie}
			<div class=" flex flex-row mx-auto grow-0 h-auto lg:w-2/3 gap-2">
				<div class=" shadow-lg">
					<img
						class=" rounded-lg"
						src="https://image.tmdb.org/t/p/w342/{movie.poster_path}"
						alt="{movie.title} Poster"
					/>
				</div>
				<div
					class=" flex flex-col w-2/3 text-stone-800 bg-stone-100 rounded-lg gap-x-10 p-6 shadow-lg"
				>
					<h1 class=" font-bold font-mono text-3xl my-4 select-all">{movie.title}</h1>
					<div class="flex flex-row justify-around mx-auto text-center my-1 gap-5">
						<span>{movie.genres[0].name}</span>
						<span>{movie.spoken_languages[0].english_name}</span>
						<span>{getFormattedDate(movie.release_date)}</span>
						<span>{movie.runtime} mins</span>
					</div>
					<p class=" text-left text-lg my-8">{movie.overview.substring(0, 200)}...</p>
					<div class=" flex flex-row gap-x-10 my-4">
						<a
							class=" hover:border-b-2 border-cyan-700"
							href="https://www.imdb.com/title/{movie.imdb_id}/"
							target="_blank"
							rel="noopener noreferrer"
							><img class=" w-14 h-auto" src="/imdblogo.svg" alt="IMDB" /></a
						>
						<a
							href="https://www.google.com/search?q={removeSpaces(movie.title, ' ', '+')}"
							target="_blank"
							rel="noopener noreferrer"
							><img class=" w-20 h-auto" src="/googlelogo.svg" alt="Google" /></a
						>
						<a
							href="https://www.rottentomatoes.com/m/{removeSpaces(movie.title, ' ', '_')}"
							target="_blank"
							rel="noopener noreferrer"
							><img class=" w-24 h-auto" src="/Rotten_Tomatoes_logo.svg" alt="Rotten Tomatoes" /></a
						>
						<a
							href="https://www.metacritic.com/movie/{removeSpaces(movie.title, ' ', '-')}"
							target="_blank"
							rel="noopener noreferrer"
							><img class=" w-28 h-auto" src="/Metacritic_logo.svg" alt="Metacritic" /></a
						>
					</div>
				</div>
			</div>
		{:else if show}
			<div class=" flex flex-row mx-auto grow-0 h-auto lg:w-2/3 gap-2">
				<div class=" shadow-lg">
					<img
						class=" rounded-lg"
						src="https://image.tmdb.org/t/p/w342/{show.poster_path}"
						alt="{show.name} Poster"
					/>
				</div>
				<div
					class=" flex flex-col w-2/3 text-stone-800 bg-stone-100 rounded-lg gap-x-10 p-6 shadow-lg"
				>
					<h1 class=" font-bold font-mono text-3xl my-4 select-all">{show.name}</h1>
					<div class="flex flex-row justify-around mx-auto text-center my-1 gap-5">
						<span>{show.genres[0].name}</span>
						<span>{show.spoken_languages[0].english_name}</span>
						<span>{getFormattedDate(show.first_air_date)}</span>
						<span>S: {show.number_of_seasons} Ep: {show.number_of_episodes}</span>
					</div>
					<p class=" text-left text-lg my-8">{show.overview.substring(0, 200)}...</p>
					<div class=" flex flex-row gap-x-10 my-4">
						<a
							href="https://www.imdb.com/title/{show.external_ids.imdb_id}/"
							target="_blank"
							rel="noopener noreferrer"
							><img class=" w-14 h-auto" src="/imdblogo.svg" alt="IMDB" /></a
						>
						<a
							href="https://www.google.com/search?q={removeSpaces(show.name, ' ', '+')}"
							target="_blank"
							rel="noopener noreferrer"
							><img class=" w-20 h-auto" src="/googlelogo.svg" alt="Google" /></a
						>
						<a
							href="https://www.rottentomatoes.com/tv/{removeSpaces(show.name, ' ', '_')}"
							target="_blank"
							rel="noopener noreferrer"
							><img class=" w-24 h-auto" src="/Rotten_Tomatoes_logo.svg" alt="Rotten Tomatoes" /></a
						>
						<a
							href="https://www.metacritic.com/tv/{removeSpaces(show.name, ' ', '-')}"
							target="_blank"
							rel="noopener noreferrer"
							><img class=" w-28 h-auto" src="/Metacritic_logo.svg" alt="Metacritic" /></a
						>
					</div>
				</div>
			</div>
			<!-- {:else if game}
			<h1 class="">{game.name}</h1>
			<img class="  w-96" src={game.background_image} alt="" />
			<div class="" /> -->
		{:else if animatedMovie}
			<div class=" flex flex-row mx-auto grow-0 h-auto lg:w-2/3 gap-2">
				<div>
					<img
						class=" rounded-lg"
						src="https://image.tmdb.org/t/p/w342/{animatedMovie.poster_path}"
						alt="{animatedMovie.title} Poster"
					/>
				</div>
				<div class=" flex flex-col w-2/3 text-stone-800 bg-stone-100 rounded-lg gap-x-10 p-6">
					<h1 class=" font-bold font-mono text-3xl my-4">{animatedMovie.title}</h1>
					<div class="flex flex-row justify-around mx-auto text-center my-1 gap-5">
						<span>{animatedMovie.genres[0].name}</span>
						<span>{animatedMovie.spoken_languages[0].english_name}</span>
						<span>{getFormattedDate(animatedMovie.release_date)}</span>
						<span>{animatedMovie.runtime} mins</span>
					</div>
					<p class=" text-left text-lg my-8">{animatedMovie.overview.substring(0, 200)}...</p>
					<div class=" flex flex-row gap-x-10 my-4">
						<a
							href="https://www.imdb.com/title/{animatedMovie.imdb_id}/"
							target="_blank"
							rel="noopener noreferrer"
							><img class=" w-14 h-auto" src="/imdblogo.svg" alt="IMDB" /></a
						>
						<a
							href="https://www.google.com/search?q={removeSpaces(animatedMovie.title, ' ', '+')}"
							target="_blank"
							rel="noopener noreferrer"
							><img class=" w-20 h-auto" src="/googlelogo.svg" alt="Google" /></a
						>
						<a
							href="https://www.rottentomatoes.com/m/{removeSpaces(animatedMovie.title, ' ', '_')}"
							target="_blank"
							rel="noopener noreferrer"
							><img class=" w-24 h-auto" src="/Rotten_Tomatoes_logo.svg" alt="Rotten Tomatoes" /></a
						>
						<a
							href="https://www.metacritic.com/movie/{removeSpaces(animatedMovie.title, ' ', '-')}"
							target="_blank"
							rel="noopener noreferrer"
							><img class=" w-28 h-auto" src="/Metacritic_logo.svg" alt="Metacritic" /></a
						>
					</div>
				</div>
			</div>
		{:else if anime}
			<div class=" flex flex-row mx-auto grow-0 h-auto lg:w-2/3 gap-2">
				<div>
					<img
						class=" rounded-lg"
						src="https://image.tmdb.org/t/p/w342/{anime.poster_path}"
						alt="{anime.name} Poster"
					/>
				</div>
				<div class=" flex flex-col w-2/3 text-stone-800 bg-stone-100 rounded-lg gap-x-10 p-6">
					<h1 class=" font-bold font-mono text-3xl my-4">{anime.name}</h1>
					<div class="flex flex-row justify-around mx-auto text-center my-1 gap-5">
						<span>{anime.genres[0].name}</span>
						<span>{anime.spoken_languages[0].english_name}</span>
						<span>{getFormattedDate(anime.first_air_date)}</span>
						<span>S: {anime.number_of_seasons} Ep: {anime.number_of_episodes}</span>
					</div>
					<p class=" text-left text-lg my-8">{anime.overview.substring(0, 200)}...</p>
					<div class=" flex flex-row gap-x-10 my-4">
						<a
							href="https://www.imdb.com/title/{anime.external_ids.imdb_id}/"
							target="_blank"
							rel="noopener noreferrer"
							><img class=" w-14 h-auto" src="/imdblogo.svg" alt="IMDB" /></a
						>
						<a
							href="https://www.google.com/search?q={removeSpaces(anime.name, ' ', '+')}"
							target="_blank"
							rel="noopener noreferrer"
							><img class=" w-20 h-auto" src="/googlelogo.svg" alt="Google" /></a
						>
						<a
							href="https://www.rottentomatoes.com/tv/{removeSpaces(anime.name, ' ', '_')}"
							target="_blank"
							rel="noopener noreferrer"
							><img class=" w-24 h-auto" src="/Rotten_Tomatoes_logo.svg" alt="Rotten Tomatoes" /></a
						>
						<a
							href="https://www.metacritic.com/tv/{removeSpaces(anime.name, ' ', '-')}"
							target="_blank"
							rel="noopener noreferrer"
							><img class=" w-28 h-auto" src="/Metacritic_logo.svg" alt="Metacritic" /></a
						>
					</div>
				</div>
			</div>
		{:else}
			<div class="" />
		{/if}

		<div class=" font-bold text-cyan-700 text-8xl rounded-2xl grow-0 m-5">
			<button on:click={getDetails} class=" cursor-pointer">Entertain Me Aman</button>
		</div>

		<div class="flex flex-row gap-2 justify-center grow-0">
			<div id="button1" class=" hover:scale-105 delay-75 transition p-0.5">
				<button
					class="font-bold rounded bg-cyan-900 text-white px-4 py-2 cursor-pointer"
					on:click={() => {
						currentSelected = 'movies';
					}}>Movies</button
				>
			</div>
			<button
				class="font-bold rounded bg-lime-900 text-white px-4 py-2 cursor-pointer"
				on:click={() => {
					currentSelected = 'shows';
				}}>Shows</button
			>
			<button
				class="font-bold rounded bg-orange-900 text-white px-4 py-2 cursor-pointer"
				on:click={() => {
					currentSelected = 'animatedMovies';
				}}>Animated Movies</button
			>
			<button
				class="font-bold rounded bg-emerald-900 text-white px-4 py-2 cursor-pointer"
				on:click={() => {
					currentSelected = 'anime';
				}}>Anime</button
			>
			<!-- <button
				class="font-bold rounded bg-rose-900 text-white px-4 py-2"
				on:click={() => {
					currentSelected = 'games';
				}}
				>Games
			</button> -->
		</div>
	</div>
</div>
