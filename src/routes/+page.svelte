<script lang="ts">

	const apiKey = '2c710afd'
	let data: any;
	let data2: any;
	let movie: any = {};
	let copy: any = {};

	async function getDetails (movieName: string) {
		data = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`).then((x) => x.json());
		movie = {...data}

		data = await fetch("https://jsonplaceholder.typicode.com/todos/1").then((x) => x.json());
		copy = {...data}
	};

	getDetails('Top_Gun_Maverick')

</script>

<pre>
	{copy.title}
	{JSON.stringify(movie)}
  {movie.Title}
</pre>

<p>
	
</p>

  
  