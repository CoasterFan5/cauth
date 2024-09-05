<script lang="ts">
	import IconButton from '$lib/components/IconButton.svelte';
	import SecurityKeyIcon from '~icons/ph/key-duotone';
	import AuthneticatorApp from '~icons/ph/number-square-zero-duotone';
	import ArrowIcon from '~icons/ph/arrow-right-light';
</script>

<div class="fabox">
	<h3>2 Factor Authentication</h3>
	<p>2FA helps to keep your account secure from hackers.</p>
	<div class="faList">
		<div class="faDisplay">
			<h4>Current Methods</h4>
		</div>
		<div class="faDisplay">
			<h4>Possible Methods</h4>
			<div class="faOption">
				<div class="left">
					<div class="icon">
						<SecurityKeyIcon />
					</div>
					<h5>Security Key</h5>
				</div>
				<IconButton>
					<ArrowIcon />
				</IconButton>
			</div>
			<div class="faOption">
				<div class="left">
					<div class="icon">
						<AuthneticatorApp />
					</div>
					<h5>Authenticator</h5>
				</div>
				<IconButton>
					<ArrowIcon />
				</IconButton>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.fabox {
		all: unset;
		padding: 1rem;
		border-radius: 0.5rem;
		background: var(--background);
		box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.1);

		h3 {
			margin: 0;
		}

		p {
			margin: 0;
			font-size: 0.8rem;
			font-weight: 400;
			opacity: 0.8;
		}
	}

	.faList {
		margin-top: 0.5rem;
		display: flex;
		flex-direction: row;
		gap: 2rem;
		width: 100%;
		box-sizing: border-box;
	}

	.faDisplay {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		height: 100%;
		width: 100%;
		flex-grow: 1;
		padding: 0.25rem;
		width: 20rem;

		h4 {
			margin: 0;
			font-weight: 500;
		}
	}

	.faOption {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border: 1px solid var(--primary10);
		border-radius: 0.25rem;
		gap: 1rem;
		width: 100%;
		padding: 0.5rem;
		font-size: 1.25rem;

		.left {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;

			h5 {
				margin: 0;
				font-weight: 500;
			}
		}
		.icon {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 2.5rem;
			width: 2.5rem;
			font-size: 1.5rem;
			border-radius: 0.25rem;
			background: var(--primary10);
			color: var(--primary);
		}
	}
</style>
