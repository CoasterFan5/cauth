<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import IconButton from '$lib/components/IconButton.svelte';
	import ArrowRight from '~icons/ph/arrow-right-light';
	import ShieldIcon from '~icons/ph/shield-duotone';
	import ImageIcon from '~icons/ph/image-duotone';

	const actionList = [
		{
			title: 'Enable 2FA',
			description: 'Protect your account with an extra layer of security.',
			icon: ShieldIcon,
			actionRoute: '/dashboard/security'
		},
		{
			title: 'Review Logs',
			description: 'View a detailed log of all account activity.',
			icon: ShieldIcon,
			actionRoute: '/dashboard/logs'
		},
		{
			title: 'Upload Profile Picture',
			description: 'Add a profile picture to your account.',
			icon: ImageIcon,
			actionRoute: '/dashboard/profile'
		}
	];
</script>

<div class="suggestedActions">
	<h3>Suggested Actions</h3>
	<div class="actionList">
		{#each actionList as action}
			<div class="action">
				<div class="icon">
					<svelte:component this={action.icon} height="100%" width="100%" />
				</div>
				<div class="content">
					<div class="title">
						<h4>{action.title}</h4>
						<IconButton href={action.actionRoute}>
							<ArrowRight />
						</IconButton>
					</div>
					<p>{action.description}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.suggestedActions {
		padding: 1rem;
		border-radius: 0.25rem;
		background: var(--background);
		box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.1);
	}

	.actionList {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.action {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		padding: 0.5rem 2rem 0.5rem 0.5rem;
		height: 5rem;
		border-radius: 0.25rem;
		background: var(--background);
		border: 1px solid var(--primary10);

		.icon {
			aspect-ratio: 1/1;
			display: flex;
			align-items: center;
			height: 100%;
			justify-content: center;
			background: var(--primary10);
			border-radius: 0.25rem;
			color: var(--primary);
			padding: 0.5rem;
			margin-right: 1rem;
		}
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		gap: 0.5rem;
		p {
			margin: 0;
		}
	}

	.title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		font-size: 1.25rem;

		h4 {
			margin: 0;
		}
	}
</style>
