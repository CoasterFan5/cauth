<script lang="ts">
	import '@fontsource/geist-sans';
</script>

<title> C Auth </title>
<div class="wrap">
	<slot />
</div>

<style lang="scss">
	:global(body) {
		--text: rgb(11, 11, 14);
		--background: rgb(249, 249, 251);
		--primary: rgb(20, 11, 196);
		--secondary: rgb(145, 145, 237);
		--accent: rgb(16, 77, 153);

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
	}
</style>
