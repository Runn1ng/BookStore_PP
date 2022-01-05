<template>
	<div class="v-main-wrapper">
		<v-header />
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
  	</div>
</template>

<script>
import vHeader from "./layouts/v-header.vue";

export default {
	name: 'v-main-wrapper',
	components: {
		vHeader
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
.v-main-wrapper {
	width: 100%;
	margin: 0 auto;
}
</style>
