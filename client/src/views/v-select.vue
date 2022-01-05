<template>
	<div class="v-select">
		<p
			class="title"
			@click="areOptionsVisible = !areOptionsVisible"
		>{{selected}}</p>	
		<div
			class="options"
			v-if="areOptionsVisible"
		>
			<p
				class="title_o"
				v-for="option in options"
				:key="option.value"
				@click="selectOption(option)"
			>{{option.name}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-select',
		props: {
			options: {
				type: Array,
				default() {
					return []
				}
			},
			selected: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				areOptionsVisible: false
			}
		},
		methods: {
			selectOption(option) {
				this.$emit('select', option);
				this.areOptionsVisible = false;
			},
			hideSelect() {
				this.areOptionsVisible = false;
			}
		},
		mounted() {
			document.addEventListener('click', this.hideSelect.bind(this), true);
		},
		beforeDestroy() {
			document.removeEventListener('click', this.hideSelect);
		}
	}
</script>

<style>
	.v-select .title,
	.v-select .title_o:not(:last-child) {
		height: 30px;
		margin-bottom: 0px;
		border-bottom: 1px solid rgba(174, 174, 174, 0.5);
	}
</style>
