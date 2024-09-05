<script lang="ts">
	export let visible = false;
	let checkingMouseUp = false;

	const startMouseUpCheck = (e: MouseEvent) => {
		if (e.currentTarget === e.target) {
			checkingMouseUp = true;
		}
	};

	const checkClose = (e: MouseEvent) => {
		if (!checkingMouseUp) {
			return;
		}
		if (e.currentTarget === e.target) {
			visible = false;
		}
		checkingMouseUp = false;
	};
</script>

{#if visible}
	<button class="modal" on:mousedown={startMouseUpCheck} on:mouseup={checkClose}>
		<slot />
	</button>
{/if}

<style lang="scss">
	.modal {
		all: unset;
		box-sizing: border-box;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(5px);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
	}
</style>
