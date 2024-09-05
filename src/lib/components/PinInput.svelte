<script lang="ts">
	export let length = 6;
	export let value = '';

	let allowFocus = false;

	const keyPressHelper = (e: KeyboardEvent) => {
		if (!(/[0-9]/i.test(e.key) || e.key === 'Enter')) {
			e.preventDefault();
		}
	};
</script>

<div class="wrap">
	{#each Array.from({ length }) as _, i}
		<div
			class="pinDisplay"
			class:placeholder={!value[i]}
			class:filled={value[i]}
			class:focused={value.length == i && allowFocus}
		>
			{value[i] || '0'}
		</div>
	{/each}

	<input
		title="pin input"
		type="text"
		pattern="[0-9]"
		bind:value
		maxlength={length}
		inputmode="numeric"
		on:keypress={keyPressHelper}
		on:focus={() => (allowFocus = true)}
		on:blur={() => (allowFocus = false)}
	/>
</div>

<style lang="scss">
	.wrap {
		position: relative;
		display: flex;
		gap: 0.5rem;
		height: 2rem;
	}

	.pinDisplay {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2.5rem;
		border: 1px solid var(--primary10);
		border-radius: 0.25rem;
		font-size: 1rem;
	}

	input {
		all: unset;
		position: absolute;
		left: 0px;
		top: 0px;
		height: 100%;
		width: 100%;
		background: transparent;
		color: transparent;
	}

	.placeholder {
		color: var(--primary25);
	}

	.filled {
		background: var(--primary10);
		border: 1px solid var(--primary25);
	}

	.focused {
		border: 1px solid var(--primary);
		background: var(--primary25);
	}
</style>
