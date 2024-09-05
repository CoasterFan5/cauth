<div class="modalInner">
	<slot />
</div>

<style lang="scss">
	.modalInner {
		background: var(--background);
		border-radius: 0.5rem;
		box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.1);
		padding: 1rem;
		max-width: 20rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
	}
</style>
