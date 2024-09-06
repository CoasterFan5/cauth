<script lang="ts">
	import SuggestedActions from './SuggestedActions.svelte';

	export let data;
</script>

<div>
	<h2>Hello, {data.user.firstName}</h2>
	<div class="content">
		<SuggestedActions user={data.user} />
	</div>
</div>
