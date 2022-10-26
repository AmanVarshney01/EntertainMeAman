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

<p>
	{JSON.stringify(movie)}
  	{movie.Title}
</p>

  
  