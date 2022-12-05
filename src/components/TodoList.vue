<template>
	<div>
		<div class="actions">
			<BaseInput autocomplete="off" v-model="input" />
			<BaseButton v-if="enableEditable" @click="editTask"
				>Edit</BaseButton
			>
			<BaseButton v-else @click="pushToTask">Add</BaseButton>
		</div>
		<div>
			<TransitionGroup name="todo-item">
				<TodoListItem
					v-for="(task, index) in tasks"
					@on-action="actionChange(index, $event)"
					:text="task?.text"
					:has-done="task?.hasDone"
					:key="index" />
			</TransitionGroup>
		</div>
	</div>
</template>
<script>
import TodoListItem from "./TodoListItem.vue";

export default {
	data: () => ({
		input: "",
		tasks: [],
		enableEditable: false,
		keyAction: null,
	}),
	methods: {
		pushToTask() {
			if (!this.input.trim()) return;
			this.tasks.push({
				hasDone: false,
				text: this.input,
			});
			this.clearInput();
		},
		editTask() {
			this.tasks[this.keyAction].text = this.input;
			this.deActiveEnableEdit();
		},
		actionChange(keyAction, actionName) {
			this.keyAction = keyAction;
			switch (actionName) {
				case "edit":
					this.activeEnableEdit();
					break;
				case "delete":
					this.tasks.splice(this.keyAction, 1);
					break;
			}
		},
		activeEnableEdit() {
			this.enableEditable = true;
			this.input = this.tasks[this.keyAction]?.text;
		},
		deActiveEnableEdit() {
			this.clearInput();
			this.enableEditable = false;
		},
		clearInput() {
			this.input = "";
		},
	},
	components: { TodoListItem },
};
</script>
<style scoped>
.todo-item-enter-active {
	transition: all 0.4s;
}
.todo-item-enter {
	transform: scale(0);
}
.todo-item-enter-to {
	transform: scale(1);
}

.actions {
	margin-bottom: 20px;
	display: flex;
	gap: 5px;
}
</style>
