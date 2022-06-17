import { tick } from 'svelte';

let mouseMoving;

export function pannable(node) {
	let x;
	let y;

	function handleMousedown(event) {
		console.log('an handleMousedown');
		event.preventDefault();
		event.stopPropagation();

		x = event.clientX;
		y = event.clientY;

		mouseMoving = true;

		node.dispatchEvent(
			new CustomEvent('panstart', {
				detail: { x, y }
			})
		);

		window.addEventListener('mousemove', handleMousemove);
		window.addEventListener('mouseup', handleMouseup);
	}

	function handleMousemove(event) {
		const dx = event.clientX - x;
		const dy = event.clientY - y;
		x = event.clientX;
		y = event.clientY;

		mouseMoving = true;

		node.dispatchEvent(
			new CustomEvent('panmove', {
				detail: { x, y, dx, dy }
			})
		);
	}

	function handleMouseup(event) {
		x = event.clientX;
		y = event.clientY;
		mouseMoving = false;

		node.dispatchEvent(
			new CustomEvent('panend', {
				detail: { x, y }
			})
		);

		window.removeEventListener('mousemove', handleMousemove);
		window.removeEventListener('mouseup', handleMouseup);
	}

	node.addEventListener('mousedown', handleMousedown);

	return {
		destroy() {
			node.removeEventListener('mousedown', handleMousedown);
		}
	};
}
