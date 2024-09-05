<script lang="ts">
	export let value = 'click';

	let backgroundCircle: HTMLDivElement;

	const clickHandle = (e: MouseEvent) => {
		const currentTarget = e.currentTarget as HTMLButtonElement;
		const leftOffset = e.clientX - currentTarget.getBoundingClientRect().x;
		const verticalOffset = e.clientY - currentTarget.getBoundingClientRect().y;
		backgroundCircle.style.left = `calc(${-backgroundCircle.clientWidth / 2}px + ${leftOffset}px)`;
		backgroundCircle.style.top = `calc(${-backgroundCircle.clientHeight / 2}px + ${verticalOffset}px)`;
		backgroundCircle.animate(
			[
				{ transform: 'scale(0)', opacity: 0 },
				{ opacity: 1 },
				{ transform: 'scale(100%)', opacity: 0 }
			],
			{
				duration: 500,
				iterations: 1
			}
		);
	};
</script>

<button on:click on:click={clickHandle}>
	<span class="value">
		{value}
	</span>
	<div class="ghostWrap">
		<div bind:this={backgroundCircle} class="ghostElement" />
	</div>
</button>

<style lang="scss">
	button {
		all: unset;
		box-sizing: border-box;
		cursor: text;
		width: 100%;
		position: relative;
		margin-top: 0.25rem;
		font-size: 1rem;
		padding: 0.5rem;
		text-align: center;
		border-radius: 0.25rem;
		background: var(--accent);
		color: var(--background);
		cursor: pointer;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s;

		&:hover {
			background: var(--primary);
		}
	}

	.ghostWrap {
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 0.25rem;
		top: 0px;
		left: 0px;
		z-index: 1;
		overflow: hidden;
		cursor: pointer;
	}

	.value {
		z-index: 5;
	}

	.ghostElement {
		top: -50%;
		left: -50%;
		opacity: 0;
		position: absolute;
		width: 200%;
		aspect-ratio: 1/1;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 50%;
	}
</style>
