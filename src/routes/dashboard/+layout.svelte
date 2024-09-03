<div class="wrap">
	<nav class="sidebar"></nav>
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	.wrap {
		width: 100%;
		height: 100vh;
		overflow-y: auto;
		display: flex;
		align-items: center;
		justify-content: start;
		background: var(--background);
	}

	.sidebar {
		width: 15rem;
		height: 100%;
		background-color: var(--background);
		box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
		border-radius: 0 1rem 1rem 0;
	}
</style>
