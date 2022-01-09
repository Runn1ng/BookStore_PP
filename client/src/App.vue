<template>
	<div id="app">
		<v-main-wrapper />
  	</div>
</template>

<script>
import vMainWrapper from './views/v-main-wrapper.vue';

export default {
	name: 'app',
	components: {
		vMainWrapper
	},
	props: {},
	data() {
		return {}
	},
	computed: {},
    methods: {}
}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 95px;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
