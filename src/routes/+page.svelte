<script>
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Link from '$lib/components/Link.svelte';
	import TextField from '$lib/components/TextField.svelte';
	import {
		createPromiseToast,
		handleToastPromiseWithFormAction
	} from '$lib/components/toastManager';
	import VSpacer from '$lib/components/VSpacer.svelte';
</script>

<form
	class="wrap"
	method="post"
	action="?/login"
	use:enhance={() => {
		const toastManager = createPromiseToast('Logging in...');
		return async ({ update, result }) => {
			handleToastPromiseWithFormAction(result, toastManager, {
				redirectsAreSuccess: true,
				redirectMessage: 'Logged in!'
			});
			await update();
		};
	}}
>
	<Card>
		<h3>Welcome Back</h3>
		<TextField label="Email" placeholder="Enter your email" name="email" />
		<VSpacer />
		<TextField
			label="Password"
			placeholder="Enter your password"
			hideContents={true}
			name="password"
		/>
		<VSpacer />
		<Button value="Sign in" />
		<VSpacer />
		<span>No account? <Link href="/signup">Sign up!</Link></span>
	</Card>
</form>

<style lang="scss">
	.wrap {
		width: 20rem;
		max-width: 95%;
	}
</style>
