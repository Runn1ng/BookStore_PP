<template>
	<div class="v-catalog-item">
		<img :src="require('../../assets/images/' + product_data.image)" alt="img">
		<p>{{product_data.name}}</p>
		<span>{{product_data.author}}</span>
		<span>Price: {{product_data.price}}</span>
		<button class="add_btn" @click="addToCart">Add to cart</button>
	</div>
</template>

<script>
	export default {
		name: 'v-catalog-item',
		components: {},
		props: {
			product_data: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {}
		},
		computed: {},
		methods: {
			addToCart() {
				this.$emit('addToCart', this.product_data);
			}
		},
		mounted() {
			this.$set(this.product_data, 'quantity', 1);
		}
	}
</script>

<style>
	.v-catalog-item {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-bottom: 16px;
		padding: 16px;
		flex-basis: 29.5%;
		box-shadow: 0 0 8px 0 #c0c0c0;
	}

	.v-catalog-item img {
		width: 50%;
		margin: 0 auto;
	}

	.v-catalog-item p {
		width: 100%;
	}

	.v-catalog-item span {
		width: 49%;
	}

	.v-catalog-item button {
		margin: 0 auto;
		padding: 8px 16px;
		border: 0;
		border-radius: 5px;
		background: #26ae70;
		color: #ffffff;
	}
</style>