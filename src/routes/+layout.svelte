<script lang="ts">
	import '@fontsource/geist-sans';
	import '@fontsource/ibm-plex-mono';
	import { Toaster } from 'svelte-french-toast';
</script>

<title> C Auth </title>
<div class="wrap">
	<slot />
</div>

<Toaster />

<style lang="scss">
	:global(body) {
		/* https://www.realtimecolors.com/?colors=0b0b0e-f9f9fb-4038d0-9191ed-5555f5&fonts=Inter-Inter */
		--text: rgb(11, 11, 14);
		--background: rgb(249, 249, 251);
		--primary: rgb(64, 56, 208);
		--primary50: rgb(64, 56, 208, 0.5);
		--primary25: rgb(64, 56, 208, 0.25);
		--primary10: rgb(64, 56, 208, 0.1);

		--success: rgb(34, 120, 29);
		--success50: rgb(34, 120, 29, 0.5);
		--success25: rgb(34, 120, 29, 0.25);
		--success10: rgb(34, 120, 29, 0.1);

		--secondary: rgb(145, 145, 237);
		--accent: rgb(85, 85, 245);
		margin: 0px;
		background: var(--bg);
	}

	:global(*) {
		box-sizing: border-box;
		font-family: 'Geist Sans', sans-serif;
	}

	.wrap {
		width: 100%;
		height: 100vh;
		overflow-y: auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
