<template>
	<div
		class="todo-item"
		@click="$emit('click-todo', $event)"
		:class="generateDoneClass">
		<div class="text" :is="hasDone ? 'del' : 'div'">
			<span class="task-number">{{ generateTaskNumber }}</span>
			<span>{{ text }}</span>
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
		taskNumber: {
			type: Number,
			default: 0,
		},
	},
	components: {
		BaseIcon,
	},
	computed: {
		generateDoneClass() {
			return this.hasDone ? "done" : null;
		},
		generateTaskNumber() {
			const hashSign = "#";
			return hashSign.concat(this.taskNumber, " ", ":");
		},
	},
};
</script>
<style scoped>
.todo-item {
	cursor: pointer;
	position: relative;
	padding: 10px 15px;
	border-radius: 0 8px 8px 0;
	background-color: var(--primary);
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
	transition: all 400ms;
}
.todo-item::before {
	content: "";
	top: 0;
	left: 0;
	bottom: 0;
	width: 5px;
	position: absolute;
	background-color: red;
	transition: inherit;
}
.todo-item.done::before {
	background-color: green;
}
.todo-item del {
	text-decoration: line-through 2px solid green;
}
.action-item > * {
	cursor: pointer;
}
.task-number {
	margin-right: 10px;
	color: var(--secondary);
	font-weight: bold;
}
</style>
