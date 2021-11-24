<template>
	<div class="v-catalog">
		<router-link :to="{name: 'cart', params: {cart_data: CART}}">
			<div class="v-catalog__link_to_cart">Cart: {{CART.length}}</div>
		</router-link>
	
		<h1>Каталог</h1>
		<v-catalog-item
			v-for="product in PRODUCTS"
			:key="product.article"
			:product_data="product" 
			@addToCart="addToCart"
		/>
	</div>
</template>

<script>
	import vCatalogItem from './v-catalog-item.vue'
	import {mapActions, mapGetters} from 'vuex'

	export default {
		name: 'v-catalog',
		components: {
			vCatalogItem,
		},
		props: {},
		data() {
			return {}
		},
		computed: {
			...mapGetters([
				'PRODUCTS',
				'CART'
			]),
		},
		methods: {
			...mapActions([
				'GET_PRODUCTS_FROM_API',
				'ADD_TO_CART'
			]),
			addToCart(data) {
				this.ADD_TO_CART(data);
			}
		},
		mounted() {
			this.GET_PRODUCTS_FROM_API();
		}
	}
</script>

<style>
	.v-catalog {
		width: 60%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
	}

	.v-catalog h1 {
		width: 100%;
		margin-bottom: 25px;
	}

	.v-catalog a {
		text-decoration: none;
		color: black;
	}

	.v-catalog .v-catalog__link_to_cart {
		position: absolute;
		top: 10px;
		right: 10px;
		padding: 15px;
		border: 1px solid #aeaeae;
	}
</style>
