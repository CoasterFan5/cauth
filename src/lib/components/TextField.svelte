<script lang="ts">
	export let label = 'text';
	export let placeholder = 'placeholder';
	export let hideContents = false;
	export let name = '';
</script>

<label>
	{label}
	<input {name} {placeholder} type={hideContents ? 'password' : ''} />
</label>

<style lang="scss">
	label {
		width: 100%;
		font-size: 0.75rem;
		display: flex;
		flex-direction: column;

		input {
			all: unset;
			box-sizing: border-box;
			cursor: text;
			width: 100%;
			margin-top: 0.25rem;
			font-size: 1rem;
			padding: 0.5rem;
			border-radius: 0.25rem;
			border: 1px solid gray;
		}
	}
</style>
