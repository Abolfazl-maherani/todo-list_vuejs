<template>
	<div class="box-input">
		<input
			class="text-input"
			type="text"
			:placeholder="placeholder"
			@input="$emit('input', $event.target.value)"
			:value="value" />
	</div>
</template>
<script>
export default {
	name: "BaseInput",
	props: {
		value: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			default: "",
		},
	},
};
</script>
<style scoped>
.text-input {
	border: 0;
	border-bottom: var(--border-input-width) solid var(--primary);
	padding: 15px;
	width: 100%;
	background-color: transparent;
	outline: 0;
	color: var(--text);
}
.box-input {
	position: relative;
	width: 100%;
}
.box-input::after {
	left: 50%;
	bottom: 0;
	height: var(--border-input-width);
	background: green;
	content: "";
	width: 100%;
	transform: translateX(-50%) scale(0);
	position: absolute;
	transition: transform 0.4s;
}
.box-input:focus-within::after {
	transform: translateX(-50%) scale(1);
}
.box-input {
	position: relative;
}
.text-input::placeholder {
	color: rgb(190, 190, 190);
}
</style>
