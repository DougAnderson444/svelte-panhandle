<script>
	import PanHandle from '$lib/PanHandle.svelte';
	let container;
	let style = 'position: relative; width: 100%; height: 100%; left: 100px;';
</script>

<h1>Reposition with PanHandle Demo</h1>
<h2>
	<pre>Edit <code>./src/routes/index.svelte</code></pre>
</h2>

<div style:style>
	<div style="position: absolute;" class="box" bind:this={container}>
		<p>Reposition Me</p>
		<PanHandle />
	</div>
</div>

<style>
	div.box {
		min-height: 200px;
		max-height: 200px;
		width: 200px;
		height: 200px;
		padding: 1em;
		left: 100px;
		top: 100px;
		box-shadow: 2px 2px 19px #e0e0e0;
		-o-box-shadow: 2px 2px 19px #e0e0e0;
		-webkit-box-shadow: 2px 2px 19px #e0e0e0;
		-moz-box-shadow: 2px 2px 19px #e0e0e0;
		-moz-border-radius: 8px;
		border-radius: 8px;
		background-color: rgba(250, 128, 114, 0.418);
	}
</style>
