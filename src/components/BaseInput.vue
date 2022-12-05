<template>
	<input
		class="text-input"
		type="text"
		@input="$emit('input', $event.target.value)"
		:value="value" />
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
	border-bottom: 2px solid rgb(30, 36, 97);
	padding: 15px;
	width: 100%;
	background-color: transparent;
	outline: 0;
}
</style>
