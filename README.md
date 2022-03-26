# Svelte PanHandle

Move you DOM node with a pan handle component.

![Demo](./demo.gif)

```js

<script>
	import PanHandle from '@douganderson444/svelte-panhandle';

	let target;
	let style = '';

	// you can also set other non-resizable vars
	let maxHeight = 400;
</script>

<div bind:this={target} style="--max-height: {maxHeight}px; {style}">
	<p>Reposition Me</p>

	{#if target}PanHandle
		<PanHandle {target} bind:style />
	{/if}
</div>

<style>
	div {
		max-height: var(--max-height);
		position: relative;
		left: 50px;
		top: 60px;
	}
</style>

```

# Use

Check out `./src/routes/index.svelte` for demo use.
