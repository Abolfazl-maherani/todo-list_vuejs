<template>
	<ion-icon @click="$emit('click', $event)" :name="icon" />
</template>
<script>
export default {
	name: "BaseIcon",
	props: {
		icon: {
			type: String,
			required: true,
		},
	},
};
</script>
