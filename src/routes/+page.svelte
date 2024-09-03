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
		<Button value="Sign in" />
		<VSpacer />
		<span>No account? <Link href="/signup">Sign up!</Link></span>
	</Card>
</div>

<style lang="scss">
	.wrap {
		width: 20rem;
		max-width: 95%;
	}
</style>
