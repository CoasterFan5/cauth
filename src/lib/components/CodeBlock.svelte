<script lang="ts">
	import toast from 'svelte-french-toast';
	import CopyIcon from '~icons/ph/copy-simple-duotone';

	export let copyText: string = '';

	const copy = () => {
		navigator.clipboard.writeText(copyText);
		toast.success('Copied to clipboard');
	};
</script>

<div class="wrap">
	<button on:click={copy} class="icon">
		<CopyIcon />
	</button>
	<pre><slot /></pre>
</div>

<style lang="scss">
	.wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		border: 1px solid var(--primary25);
		background: var(--primary10);
		border-radius: 0.25rem;
		padding: 0 0.5rem;
		gap: 0.5rem;
		max-width: 100%;
	}

	.icon {
		all: unset;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 2rem;
		width: 2rem;
		font-size: 1.2rem;
		border-radius: 0.25rem;
		color: var(--primary);
		cursor: pointer;
	}

	pre {
		margin: 0;
		height: 100%;
		padding: 0.5rem 0.25rem;
		font-size: 0.8rem;
		font-family: 'IBM Plex Mono', monospace;
		overflow-x: auto;
	}
</style>
