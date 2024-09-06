<script lang="ts">
	import MfaBox from './MFABox.svelte';

	export let data;
</script>

<div class="wrap">
	<h2>Security</h2>
	<MfaBox user={data.user} />
</div>

<style lang="scss">
	.wrap {
		overflow-y: auto;
		display: flex;
		height: 100%;
		width: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: start;
	}
</style>
