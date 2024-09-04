<script lang="ts">
	import HomeIcon from '~icons/ph/house-duotone';
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	import { linear, quadIn, quadInOut, quadOut } from 'svelte/easing';
	const sidebarRoutes = [
		{
			text: 'Home',
			icon: HomeIcon,
			url: '/dashboard'
		},
		{
			text: 'Security',
			icon: HomeIcon,
			url: '/dashboard/security'
		}
	];
</script>

<div class="wrap">
	<nav class="sidebar">
		{#each sidebarRoutes as route}
			<a class="link" href={route.url} class:active={$page.url.pathname === route.url}>
				<span class="icon">
					<svelte:component this={route.icon} />
				</span>
				<span class="text"> {route.text} </span>
			</a>
		{/each}
	</nav>

	<div class="content">
		{#key $page.url.pathname}
			<div
				class="contentInner"
				in:fade={{
					delay: 0,
					duration: 250,
					easing: quadInOut
				}}
			>
				<slot />
			</div>
		{/key}
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
		padding: 1rem 1rem 1rem 0rem;
	}

	.link {
		text-decoration: none;
		display: flex;
		align-items: center;
		justify-content: start;
		padding: 0.25rem 1.5rem;
		gap: 0.5rem;
		font-size: 1.2rem;
		color: var(--text);
		border-radius: 0 1rem 1rem 0;
		position: relative;
		background-image: linear-gradient(
			90deg,
			transparent 0%,
			transparent 50%,
			var(--primary25) 50%,
			var(--primary10) 100%
		);
		background-size: 200%;
		background-position: 0%;
		transition: background-position ease-in-out 0.25s;

		&::before {
			transition: background-position cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
			content: '';
			position: absolute;
			width: 7px;
			height: 100%;
			left: 0;
			border-radius: 0 1rem 1rem 0;
			top: 0;
			background-image: linear-gradient(
				90deg,
				transparent 0%,
				transparent 50%,
				var(--primary) 50%,
				var(--primary) 100%
			);
			background-size: 200%;
			background-position: 0%;
		}

		.icon {
			font-size: 1.25rem;
			opacity: 0.5;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.text {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			text-decoration: none;
			opacity: 0.75;
			font-size: 1rem;
		}

		&:hover {
			color: var(--primary);
			.icon {
				opacity: 0.75;
			}
			.text {
				opacity: 1;
			}
		}

		&.active {
			background-position: -100%;
			color: var(--primary);

			.icon {
				opacity: 1;
			}

			.text {
				opacity: 1;
			}

			&::before {
				background-position: -100%;
			}
		}
	}

	.content {
		width: 100%;
		height: 100vh;
		position: relative;
		overflow-y: hidden;
	}
	.contentInner {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0px;
		top: 0px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow-y: auto;
	}
</style>
