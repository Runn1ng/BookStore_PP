<template>
	<div class="v-main-wrapper">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
  	</div>
</template>

<script>
export default {
	name: 'v-main-wrapper',
	components: {},
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
