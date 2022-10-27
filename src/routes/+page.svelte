<script lang="ts">
	const apiKey = '2c710afd'
	let data: any;
	let movie: any = {};

	async function getDetails (movieName: string) {
		data = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`).then((x) => x.json());
		movie = {...data}
	};

	getDetails('Top_Gun_Maverick')

</script>

<h1><button>Entertain Me Aman</button></h1>

<p>
	{JSON.stringify(movie)}
  	{movie.Title}
</p>
<img class="w-1/4 h-1/4" src="{movie.Poster}" alt="{movie.Title} Poster">

  
  