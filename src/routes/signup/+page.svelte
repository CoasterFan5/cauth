<script lang="ts">
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
	import type { ActionData } from './$types';

	export let form: ActionData;
	console.log(form?.message);
</script>

<form
	class="wrap"
	method="post"
	action="?/createAccount"
	use:enhance={() => {
		const toastManager = createPromiseToast('Creating Account...');
		return async ({ result, update }) => {
			handleToastPromiseWithFormAction(result, toastManager);
			await update();
			return;
		};
	}}
>
	<Card>
		<h3>Welcome!</h3>
		<TextField label="Email" placeholder="123@123.com" name="email" />
		<VSpacer />
		<TextField label="First Name" placeholder="John" name="firstName" />
		<VSpacer />
		<TextField label="Last Name" placeholder="Doe" name="lastName" />
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
</form>

<style lang="scss">
	.wrap {
		width: 20rem;
		max-width: 95%;
	}
</style>
