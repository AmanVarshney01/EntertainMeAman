<script lang="ts">
	import { movies, shows, animatedMovies, games, animes } from '../data.json';

	const apiKeyTmdb = '0f30077ee9f1be6f1d82b08eb555e7af';
	const apiKeyRawg = 'cad2990e2205456cadc2e24ab207f45a';
	// let data: any;
	let movie: any;
	let game: any;
	let anime: any;
	let animatedMovie: any;
	let show: any;

	async function getMovieDetails() {
		let random: number = movies[Math.floor(Math.random() * movies.length)];
		let data: any = await fetch(
			`https://api.themoviedb.org/3/movie/${random}?api_key=${apiKeyTmdb}`
		).then((x) => x.json());
		movie = { ...data };
	}

	async function getGameDetails() {
		let random: string = games[Math.floor(Math.random() * games.length)];
		let data: any = await fetch(`https://rawg.io/api/games/${random}?key=${apiKeyRawg}`).then((x) =>
			x.json()
		);
		game = { ...data };
	}

	async function getShowDetails() {
		let random: number = shows[Math.floor(Math.random() * shows.length)];
		let data: any = await fetch(
			`https://api.themoviedb.org/3/tv/${random}?api_key=${apiKeyTmdb}`
		).then((x) => x.json());
		show = { ...data };
	}

	async function getAnimatedMovieDetails() {
		let random: number = animatedMovies[Math.floor(Math.random() * shows.length)];
		let data: any = await fetch(
			`https://api.themoviedb.org/3/movie/${random}?api_key=${apiKeyTmdb}`
		).then((x) => x.json());
		animatedMovie = { ...data };
	}

	async function getAnimeDetails() {
		let random: number = animes[Math.floor(Math.random() * animes.length)];
		let data: any = await fetch(
			`https://api.themoviedb.org/3/tv/${random}?api_key=${apiKeyTmdb}`
		).then((x) => x.json());
		anime = { ...data };
	}

	let currentSelected: string;

	const getDetails = () => {
		movie = 0;
		show = 0;
		animatedMovie = 0;
		game = 0;
		anime = 0;

		if (currentSelected == 'movies') {
			getMovieDetails();
		} else if (currentSelected == 'games') {
			getGameDetails();
		} else if (currentSelected == 'shows') {
			getShowDetails();
		} else if (currentSelected == 'animatedMovies') {
			getAnimatedMovieDetails();
		} else if (currentSelected == 'anime') {
			getAnimeDetails();
		} else {
			getMovieDetails();
		}
	};

	const getFormattedDate = (d: string) => {
		let date = new Date(d);
		return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
	};

	// https://rawg.io/api/games/far-cry-3?key=cad2990e2205456cadc2e24ab207f45a
</script>


<div class=" h-screen w-full flex flex-col justify-center text-center bg-black">
	<div class=" flex flex-col w-3/4 mx-auto gap-4">
		{#if movie}
			<div class=" flex flex-row mx-auto grow-0 h-auto lg:w-2/3 gap-2">
				<div>
					<img
						class=" rounded-lg"
						src="https://image.tmdb.org/t/p/w342/{movie.poster_path}"
						alt="{movie.Title} Poster"
					/>
				</div>
				<div class=" flex flex-col w-2/3 text-stone-800 bg-stone-100 rounded-lg gap-x-10 p-6">
					<h1 class=" font-bold font-mono text-3xl my-4">{movie.title}</h1>
					<div class="flex flex-row justify-around mx-5 text-center my-1">
						<span>{movie.genres[0].name}</span>
						<span>{movie.spoken_languages[0].english_name}</span>
						<span>{getFormattedDate(movie.release_date)}</span>
						<span>{movie.runtime} mins</span>
					</div>
					<p class=" text-left text-lg my-8">{movie.overview.substring(0, 200)}...</p>
					<div class=" flex flex-row gap-x-10 my-4">
						<a
							href="https://www.imdb.com/title/{movie.imdb_id}/"
							target="_blank"
							rel="noopener noreferrer"><img class=" w-14 h-auto" src="/imdblogo.svg" alt="IMDB" /></a
						>
						<a
							href="https://www.google.com/search?q={movie.title.replace(' ', '+')}"
							target="_blank"
							rel="noopener noreferrer"><img class=" w-20 h-auto" src="/googlelogo.svg" alt="Google" /></a
						>
					</div>
				</div>
			</div>
		{:else if show}
			<div class=" flex flex-row mx-auto grow-0 h-auto lg:w-1/2">
				<div>
					<img
						class=""
						src="https://image.tmdb.org/t/p/w342/{show.poster_path}"
						alt="{show.name} Poster"
					/>
				</div>
				<div class=" flex flex-col w-2/3">
					<h1 class=" font-bold font-mono">{show.name}</h1>
					<div class=" ">{show.overview}</div>
				</div>
			</div>
		{:else if game}
			<h1 class="">{game.name}</h1>
			<img class="  w-96" src={game.background_image} alt="" />
			<div class="" />
		{:else if animatedMovie}
			<div class=" flex flex-row mx-auto grow-0 h-auto w-1/2">
				<div>
					<img
						class=" "
						src="https://image.tmdb.org/t/p/w342/{animatedMovie.poster_path}"
						alt="{animatedMovie.title} Poster"
					/>
				</div>
				<div class=" flex flex-col w-2/3">
					<h1 class=" font-bold font-mono">{animatedMovie.title}</h1>
					<div class=" ">{animatedMovie.overview}</div>
				</div>
			</div>
		{:else if anime}
			<div class=" flex flex-row mx-auto grow-0 h-auto w-1/2">
				<div>
					<img
						class=" "
						src="https://image.tmdb.org/t/p/w342/{anime.poster_path}"
						alt="{anime.name} Poster"
					/>
				</div>
				<div class=" flex flex-col w-2/3">
					<h1 class=" font-bold font-mono">{anime.name}</h1>
					<div class=" ">{anime.overview}</div>
				</div>
			</div>
		{:else}
			<div class=" bg-slate-400" />
		{/if}

		<button
			class="font-bold text-sky-700 bg-slate-200 text-4xl rounded-2xl grow-0 p-4"
			on:click={getDetails}>Entertain Me Aman</button
		>

		<div class=" flex flex-row gap-2 justify-center grow-0">
			<button
				class="font-bold rounded bg-cyan-900 text-white px-4 py-2"
				on:click={() => {
					currentSelected = 'movies';
				}}>Movies</button
			>
			<button
				class="font-bold rounded bg-lime-900 text-white px-4 py-2"
				on:click={() => {
					currentSelected = 'shows';
				}}>Shows</button
			>
			<button
				class="font-bold rounded bg-orange-900 text-white px-4 py-2"
				on:click={() => {
					currentSelected = 'animatedMovies';
				}}>Animated Movies</button
			>
			<button
				class="font-bold rounded bg-emerald-900 text-white px-4 py-2"
				on:click={() => {
					currentSelected = 'anime';
				}}>Anime</button
			>
			<button
				class="font-bold rounded bg-rose-900 text-white px-4 py-2"
				on:click={() => {
					currentSelected = 'games';
				}}
				>Games
			</button>
		</div>
	</div>
</div>
