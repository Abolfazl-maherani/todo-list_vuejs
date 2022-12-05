<template>
	<div class="todo-item" :class="generateDoneClass">
		<div class="text">
			{{ text }}
		</div>
		<div class="action-item">
			<BaseIcon
				@click="$emit('on-action', 'edit')"
				icon="create-outline" />
			<BaseIcon
				@click="$emit('on-action', 'delete')"
				icon="trash-outline" />
		</div>
	</div>
</template>
<script>
import BaseIcon from "./BaseIcon.vue";
export default {
	props: {
		text: {
			type: String,
			required: true,
		},
		hasDone: {
			type: Boolean,
			default: false,
		},
	},
	components: {
		BaseIcon,
	},
	computed: {
		generateDoneClass() {
			return this.hasDone ? "done" : null;
		},
	},
};
</script>
<style scoped>
.todo-item {
	position: relative;
	padding: 10px 15px;
	border-radius: 0 8px 8px 0;
	background-color: #282426;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
}
.todo-item::before {
	content: "";
	top: 0;
	left: 0;
	bottom: 0;
	width: 5px;
	position: absolute;
	background-color: red;
}
.todo-item.done::before {
	background-color: green;
}
.todo-item.done .text {
	text-decoration: overline;
}
.action-item > * {
	cursor: pointer;
}
</style>
