<template>
	<div id="app">
		<div class="container">
			<TodoList />
		</div>
	</div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
export default {
	name: "App",
	components: {
		TodoList,
	},
};
</script>

<style>
@import "@/assets/css/main.css";
body {
	background: var(--bg);
	font-family: Kanit;
}
#app {
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: var(--text);
	margin-top: 60px;
}
.container {
	max-width: 400px;
	margin: 0 auto;
	width: 100%;
}
@media only screen and (max-width: 480px) {
	.container {
		max-width: 100%;
		padding: 0 40px;
	}
}
</style>
