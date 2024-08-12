<script lang="ts">
	import '@fontsource/geist-sans';
</script>

<div class="wrap">
	<slot />
</div>

<style lang="scss">
	:global(body) {
		margin: 0px;
	}

	:global(*) {
		box-sizing: border-box;
		font-family: 'Geist Sans', sans-serif;
	}

	.wrap {
		width: 100%;
		height: 100%;
	}
</style>
