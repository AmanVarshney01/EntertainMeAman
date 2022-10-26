<!-- <script context="module">
    export async function load({ fetch }) {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0f30077ee9f1be6f1d82b08eb555e7af&language=en-US&page=1`)
        const data = await res.json()
        if (res.ok) {
            return {
                props: {popular: data.results}
            }
    }
    }
</script> -->

<script lang="ts">
    // export let popular;
    // console.log(popular)
    let movie: string;

	fetch('https://api.themoviedb.org/3/movie/popular?api_key=0f30077ee9f1be6f1d82b08eb555e7af&language=en-US&page=1')
		.then((response) => response.json())
		.then((movie) => {
			movie = movie.original_title;
		})
</script>

<h1 class="font-bold ">Entertain Me Aman {movie}</h1>
