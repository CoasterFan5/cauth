<div class="card">
	<slot />
</div>

<style lang="scss">
	.card {
		border-radius: 0.25rem;
		padding: 1rem;
		box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.1);
		background: var(--bg);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
	}
</style>
