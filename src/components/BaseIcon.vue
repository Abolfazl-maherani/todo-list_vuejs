<template>
	<ion-icon @click="$emit('click')" :name="icon" />
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
