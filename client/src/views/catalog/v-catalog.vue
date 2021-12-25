<template>
	<div class="v-catalog">
		<router-link :to="{name: 'cart', params: {cart_data: CART}}">
			<div class="v-catalog__link_to_cart">Cart: {{CART.length}}</div>
		</router-link>
	
		<h1>Каталог</h1>
		<div class="select">
			<v-select 
				:selected="selected"
				:options="covers"
				@select="sortByCovers"
			/>
		</div>
		
		<div class="items">
			<v-catalog-item
				v-for="product in filteredProducts"
				:key="product.article"
				:product_data="product" 
				@addToCart="addToCart"
			/>
		</div>
	</div>
</template>

<script>
	import vCatalogItem from './v-catalog-item.vue'
	import vSelect from '../v-select.vue'
	import {mapActions, mapGetters} from 'vuex'

	export default {
		name: 'v-catalog',
		components: {
			vCatalogItem,
			vSelect,
		},
		props: {},
		data() {
			return {
				covers: [
					{name: 'Все', value: 'all'},
					{name: 'Твердый переплет', value: 'hc'},
					{name: 'Мягкий переплет', value: 'sc'}
				],
				selected: 'Все',
				sortedProducts: []
			}
		},
		computed: {
			...mapGetters([
				'PRODUCTS',
				'CART'
			]),
			filteredProducts() {
				if (this.sortedProducts.length){
					return this.sortedProducts;
				}
				else
					return this.PRODUCTS;
			},
		},
		methods: {
			...mapActions([
				'GET_PRODUCTS_FROM_API',
				'ADD_TO_CART'
			]),
			sortByCovers(cover){
				this.sortedProducts = [];
				let vm = this;
				this.PRODUCTS.map(function (item) {
					let cov = 'Мягкий переплет'

					if (item.cover)
						cov = 'Твердый переплет'
					else
						cov = 'Мягкий переплет'

					if (cov === cover.name)
					{
						vm.sortedProducts.push(item);
					}
				})

				this.selected = cover.name;
			},
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
		width: 80%;
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

	.v-catalog .select {
		width: 15%;
	}

	.v-catalog .items {
		width: 84%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}
</style>
