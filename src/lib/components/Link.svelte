<script lang="ts">
	export let href: string = '';

	let underlineElement: HTMLDivElement;
	const handleMovement = (e: MouseEvent) => {
		const currentTarget = e.currentTarget as HTMLLinkElement;
		const leftOffset = e.clientX - currentTarget.getBoundingClientRect().x;
		underlineElement.style.left = `${-underlineElement.clientWidth / 2 + leftOffset}px`;
	};
</script>

<a {href} on:mouseenter={handleMovement}>
	<slot />
	<div class="underlineHolder">
		<div bind:this={underlineElement} class="underline" />
	</div>
</a>

<style lang="scss">
	a {
		all: unset;
		color: var(--accent);
		cursor: pointer;
		position: relative;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;

		&:hover {
			color: var(--primary);
			.underlineHolder {
				.underline {
					transform: scaleX(1);
					background: var(--primary);
				}
			}
		}
	}

	.underlineHolder {
		position: absolute;
		width: 100%;
		left: 0px;
		bottom: 0px;
		height: 0.1rem;
		overflow: hidden;

		.underline {
			position: absolute;
			width: 200%;
			left: -100%;
			background: var(--accent);
			height: 0.1rem;
			transform: scaleX(0);
			transition:
				transform cubic-bezier(0.215, 0.61, 0.355, 1) 1s,
				background cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
		}
	}
</style>
