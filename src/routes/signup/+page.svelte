<script>
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Link from '$lib/components/Link.svelte';
	import TextField from '$lib/components/TextField.svelte';
	import VSpacer from '$lib/components/VSpacer.svelte';
</script>

<div class="wrap">
	<Card>
		<h3>Welcome!</h3>
		<TextField label="Email" placeholder="Enter email" name="email" />
		<VSpacer />
		<TextField label="Password" placeholder="Password" name="pass1" hideContents={true} />
		<VSpacer />
		<TextField label="Confirm Password" placeholder="Password" name="pass2" hideContents={true} />
		<VSpacer />
		<Button value="Create Account" />
		<VSpacer />
		<span>
			Have an account? <Link href="/">Sign in!</Link>
		</span>
	</Card>
</div>

<style lang="scss">
	.wrap {
		width: 20rem;
		max-width: 95%;
	}
</style>
