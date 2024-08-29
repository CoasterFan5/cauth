<script>
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Link from '$lib/components/Link.svelte';
	import TextField from '$lib/components/TextField.svelte';
	import VSpacer from '$lib/components/VSpacer.svelte';
</script>

<div class="wrap">
	<Card>
		<h3>Welcome Back</h3>
		<TextField label="Email" placeholder="Enter your email" />
		<VSpacer />
		<TextField label="Password" placeholder="Enter your password" hideContents={true} />
		<VSpacer />
		<Button />
		<VSpacer />
		<span>No account? <Link>Sign up!</Link></span>
	</Card>
</div>

<style lang="scss">
	.wrap {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	input::placeholder {
		color: rgba(0, 0, 0, 0.5);
	}
</style>
