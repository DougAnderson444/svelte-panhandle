<script>
	import PointerTracker from '@douganderson444/pointer-tracker';

	let pointerTracker;

	let left;
	let top;

	function panHandle(node) {
		pointerTracker = new PointerTracker(node, {
			eventListenerOptions: { capture: true }, // catch the event before it goes to child in the DOM tree
			avoidPointerEvents: true, // pointers dont seem to work
			start: (pointer, event) => {
				if (pointerTracker.currentPointers.length === 1) return false; // track only 1 pointer at a time

				event.preventDefault();
				event.stopPropagation();

				left = (left || getComputedStyle(node.parentNode)['left'].replace('px', '') || 0) * 1;
				top = (top || getComputedStyle(node.parentNode)['top'].replace('px', '') || 0) * 1;

				return true;
			},
			move: (previousPointers, changedPointers, event) => {
				event.preventDefault();
				event.stopPropagation(); // continue exclusive rights over the pointer from DOM tree
				let dx = pointerTracker.currentPointers[0].pageX - previousPointers[0].pageX;
				let dy = pointerTracker.currentPointers[0].pageY - previousPointers[0].pageY;

				left = left + dx;
				top = top + dy;

				node.parentNode.style.left = left + 'px';
				node.parentNode.style.top = top + 'px';
			},
			end: (pointer, event, cancelled) => {
				// nothing to do here
				// console.log('Drag ended');
			}
		});
	}
</script>

<div class="dragger" use:panHandle>
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

<style>
	.dragger {
		cursor: grab;
		user-select: none;
		color: rgba(255, 255, 255, 0.69);
		text-align: center;
		background: rgba(0, 0, 0, 0.103);
		margin: 10px;
		margin: 10px;
		padding: 7px;
		border-radius: 3px;
		border: 0px solid #aaa;
		position: absolute;
		top: 1px;
		right: 1px;
		z-index: 10;
	}
</style>
