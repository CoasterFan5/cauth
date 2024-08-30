<script>
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<form class="wrap" method="post" action="?/resendEmail">
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
