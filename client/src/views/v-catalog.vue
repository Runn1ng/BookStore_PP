<template>
	<div class="v-catalog">
		<router-link :to="{name: 'cart'}">
			<div class="v-catalog__link_to_cart">Cart: 0</div>
		</router-link>
		
		<div class="cat"></div>
		<h1>Каталог</h1>
		<v-catalog-item
			v-for="product in PRODUCTS"
			:key="product.article"
			:product_data="product" 
			@sendArticle="addToCart"
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
				'PRODUCTS'
			]),
		},
		methods: {
			...mapActions([
				'GET_PRODUCTS_FROM_API'
			]),
			addToCart(date) {
				console.log(date);
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
