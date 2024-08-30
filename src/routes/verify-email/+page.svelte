<script>
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import {
		createPromiseToast,
		handleToastPromiseWithFormAction
	} from '$lib/components/toastManager';
</script>

<form
	class="wrap"
	method="post"
	action="?/resendEmail"
	use:enhance={() => {
		const toastActions = createPromiseToast('Sending Email!');
		return async ({ result, update }) => {
			handleToastPromiseWithFormAction(result, toastActions);
			await update();
			return;
		};
	}}
>
	<Card>
		<h3>Almost there!</h3>
		<p>
			We have sent you an email! Please follow the instructions contained in the email to finish
			registration.
		</p>
		<Button value="Resend Email" />
	</Card>
</form>

<style lang="scss">
	.wrap {
		width: 20rem;
		max-width: 95%;
	}

	p {
		text-align: center;
	}
</style>
