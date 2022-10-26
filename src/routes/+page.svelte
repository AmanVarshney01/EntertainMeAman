<script lang="ts">

	import { onMount } from 'svelte';
	const apiKey = '2c710afd'
	let data: any;
	let movie: any = {};

	onMount(async function () {
		data = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=dangal`).then((x) => x.json());
		movie = {...data}
	});

	// getDetails('Top_Gun_Maverick')

</script>

<pre>
	{JSON.stringify(movie)}
  {movie.Title}
</pre>

<p>
	
</p>

  
  