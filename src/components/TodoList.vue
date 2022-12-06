<template>
	<div>
		<div class="top">
			<div></div>
			<div class="actions">
				<BaseInput
					@keypress.enter="onKeypress"
					ref="input"
					placeholder="Enter your Task"
					autocomplete="off"
					v-model="input" />
				<BaseButton
					class="btn-action"
					v-if="enableEditable"
					@click="editTask"
					>Edit</BaseButton
				>
				<BaseButton v-else class="btn-action" @click="pushToTask"
					>Add</BaseButton
				>
			</div>
		</div>
		<div>
			<TransitionGroup name="todo-item">
				<TodoListItem
					@click-todo="onClickTodo(index)"
					v-for="(task, index) in tasks"
					@on-action="actionChange(index, $event)"
					:text="task?.text"
					:has-done="task?.hasDone"
					:key="index"
					:task-number="index + 1" />
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
	created() {
		const localStorageValue = this.getInLocalStorage("tasks");
		this.tasks = localStorageValue || [];
	},

	mounted() {},
	methods: {
		onKeypress() {
			!this.enableEditable ? this.pushToTask() : this.editTask();
		},
		pushToTask() {
			if (!this.input.trim()) return;
			this.tasks.push({
				hasDone: false,
				text: this.input,
			});
			this.storeTaskToLocalStorage();
			this.clearInput();
		},
		editTask() {
			this.tasks[this.keyAction].text = this.input;
			this.storeTaskToLocalStorage();
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
					this.storeTaskToLocalStorage();
					break;
			}
		},
		onClickTodo(index) {
			this.tasks[index].hasDone = !this.tasks[index].hasDone;
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
		storeTaskToLocalStorage() {
			this.saveToLocalStorege("tasks", this.tasks);
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
.btn-action {
	min-width: 100px;
}
.actions {
	margin-bottom: 20px;
	display: flex;
	gap: 30px;
}
.top {
	position: sticky;
	top: 0;
	background: var(--bg);
	z-index: 99;
	padding: 20px 0 30px 0;
}
</style>
