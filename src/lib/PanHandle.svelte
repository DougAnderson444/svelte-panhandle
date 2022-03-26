<script>
	import { createEventDispatcher, onMount } from 'svelte';

	export let target;
	export let style;

	const baseStyle = style;

	let left;
	let top;

	$: if (left || top) style = `left: ${left}px; top: ${top}px; ${baseStyle}`;

	const dispatch = createEventDispatcher();

	let pannable;

	onMount(async () => {
		({ pannable } = await import('./pannable'));
	});

	function handlePanStart(event) {
		console.log({
			left: getComputedStyle(target)['left'],
			top: getComputedStyle(target)['top']
		});
		left = (left || getComputedStyle(target)['left'].replace('px', '') || 0) * 1;
		top = (top || getComputedStyle(target)['top'].replace('px', '') || 0) * 1;

		console.log({
			x: left,
			y: top
		});

		dispatch('panstart', 'panstart');
	}
	function handlePanMove(event) {
		console.log({
			dx: event.detail.dx,
			dy: event.detail.dy
		});
		left = left + event.detail.dx;
		top = top + event.detail.dy;
		console.log({
			left,
			top
		});
		dispatch('panmove', 'panmove'); // makes them stay still when mouse moving for a while
	}

	function handlePanEnd(event) {
		dispatch('panend', 'panend');
	}
</script>

{#if pannable}
	<div
		class="dragger"
		use:pannable
		on:panmove={handlePanMove}
		on:panend={handlePanEnd}
		on:panstart={handlePanStart}
	>
		<svg
			width="20"
			height="20"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			class="svg-inline--fa fa-arrows-alt fa-w-16"
			data-icon="arrows-alt"
			data-prefix="fas"
			viewBox="0 0 512 512"
			><defs /><path
				fill="currentColor"
				d="M352 426l-79 79c-9 9-25 9-34 0l-79-79c-15-15-5-41 17-41h51V284H127v51c0 22-26 32-41 17L7 273c-9-9-9-25 0-34l79-79c15-15 41-5 41 17v51h101V127h-51c-22 0-32-26-17-41l79-79c9-9 25-9 34 0l79 79c15 15 5 41-17 41h-51v101h101v-51c0-22 26-32 41-17l79 79c9 9 9 25 0 34l-79 79c-15 15-41 5-41-17v-51H284v101h51c22 0 32 26 17 41z"
			/></svg
		>
	</div>
{/if}

<style>
	.dragger {
		cursor: grab;
		user-select: none;
		color: rgba(255, 255, 255, 0.69);
		text-align: center;
		background: rgba(0, 0, 0, 0.103);
		margin-top: 7px;
		margin-right: 7px;
		padding: 7px 7px 4px 7px;
		border-radius: 3px;
		border: 0px solid #aaa;
		position: absolute;
		top: 1px;
		right: 1px;
	}
</style>
