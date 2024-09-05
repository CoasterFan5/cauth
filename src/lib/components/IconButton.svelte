<script lang="ts">
	export let href: string | undefined = undefined;
</script>

{#if href}
	<a {href} on:click class="iconButton">
		<slot />
	</a>
{:else}
	<button on:click class="iconButton">
		<slot />
	</button>
{/if}

<style lang="scss">
	.iconButton {
		all: unset;
		padding: 0.25rem;
		border-radius: 50%;
		aspect-ratio: 1/1;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--primary10);
		color: var(--primary);
		cursor: pointer;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s;

		&:hover {
			background: var(--primary25);
		}
	}
</style>
