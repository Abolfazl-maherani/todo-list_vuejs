<template>
	<button class="btn" @click="$emit('click')">
		<slot></slot>
	</button>
</template>
<script>
export default {};
</script>
<style scoped>
.btn {
	background: var(--primary);
	border-radius: 8px;
	padding: 8px;
	border: 0;
	outline: 0;
	color: var(--text);
	cursor: pointer;
}
</style>
