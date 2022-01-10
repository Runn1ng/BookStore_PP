<template>
	<div class="v-catalog">
		<router-link :to="{name: 'cart', params: {cart_data: CART}}">
			<div class="v-catalog__link_to_cart">Корзина: {{CART.length}}</div>
		</router-link>
	
		<h1>Каталог</h1>
		<div class="filters">
			<div class="select">
				<v-select 
					:selected="selected"
					:options="covers"
					@select="sortByCovers"
				/>
			</div>
			<div class="range-slider">
				<input 
					type="range" min="0" max="5000" step="10" 
					v-model.number="minPrice"
					@change="setRange"
				>
				<input 
					type="range" min="0" max="5000" step="10" 
					v-model.number="maxPrice"
					@change="setRange"
				>
			</div>
			<div class="range-value">
				<p>Мин: {{minPrice}}</p>
				<p>Макс: {{maxPrice}}</p>	
			</div>
		</div>
		
		<div class="items">
			<p v-if="!filteredProducts">Ничего не найдено :с</p>
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
				sortedProducts: [],
				minPrice: 0,
				maxPrice: 5000,
			}
		},
		computed: {
			...mapGetters([
				'PRODUCTS',
				'CART',
				'SEARCH_VALUE'
			]),
			filteredProducts() {
				if (this.sortedProducts.length){
					return this.sortedProducts;
				}
				// else
				// 	return this.PRODUCTS;
			},
		},
		methods: {
			...mapActions([
				'GET_PRODUCTS_FROM_API',
				'ADD_TO_CART'
			]),
			setRange() {
				if (this.minPrice > this.maxPrice)
				{
					let temp = this.maxPrice;
					this.maxPrice = this.minPrice;
					this.minPrice = temp;
				}

				for (let i = 0; i < this.covers.length; i++)
				{
					if (this.covers[i].name === this.selected)
					{
						this.sortByCovers(this.covers[i]);
					}
				}
			},
			sortByCovers(cover) {
				let vm = this;
				this.sortedProducts = [...this.PRODUCTS];

				if (cover && cover.name != 'Все') {
					this.sortedProducts = this.sortedProducts.filter(function(e) {
						let cov = 'Мягкий переплет'

						console.log(cover);

						if (e.cover)
							cov = 'Твердый переплет'
						else
							cov = 'Мягкий переплет'

						if (cov === cover.name)
							return e.price >= vm.minPrice && e.price <= vm.maxPrice;
					});
				}
				else
				{
					this.sortedProducts = this.sortedProducts.filter(function(item) {
						return item.price >= vm.minPrice && item.price <= vm.maxPrice;
					});
				}

				this.selected = cover.name;
			},
			addToCart(data) {
				this.ADD_TO_CART(data);
			},
			sortProductsBySearch(value) {
				this.sortedProducts = [...this.PRODUCTS];

				if (value){
					this.sortedProducts = this.sortedProducts.filter(function(item) {
						return item.name.toLowerCase().includes(value.toLowerCase());
					});
				}
				else
					this.sortedProducts = this.PRODUCTS;
			}
		},
		watch: {
			SEARCH_VALUE() {
				this.sortProductsBySearch(this.SEARCH_VALUE);
			}
		},
		mounted() {
			this.GET_PRODUCTS_FROM_API()
				.then((response) => {
					if (response.data) {
						console.info('Welcome \u005C(^-^)/');
					}
					this.sortByCovers(this.covers[0]);
					this.sortProductsBySearch(this.SEARCH_VALUE);
				})
		}
	}
</script>

<style>
	.v-catalog {
		width: 80%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-start; 
		margin: 0 auto;
	}

	.v-catalog h1 {
		width: 100%;
		margin-bottom: 30px;
	}

	.v-catalog a {
		text-decoration: none;
		color: black;
	}

	.v-catalog .v-catalog__link_to_cart {
		position: fixed;
		top: 110px;
		right: 15px;
		padding: 15px;
		border: 1px solid #aeaeae;
		background: #ffffff;
	}

	.v-catalog .select {
		width: 100%;
		box-shadow: 0 0 8px 0 #c0c0c0;
	}

	.v-catalog .items {
		width: 84%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}

	.v-catalog .items p:first-child {
		width: 81.5%;
	}

	.filters {
		width: 15%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.range-slider {
		width: 90%;
		margin: auto 16px;
		margin-top: 35px;
		text-align: center;
		position: relative;
	}

	.range-slider svg,
	.range-slider input[type=range] {
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 0;

		-webkit-appearance: none;
		height: 5px;
		background-color: #cccccc;
		outline: none;
		-webkit-transition: .2s;
		transition: opacity .2s;
		margin: 12px 0px 5px 0px;
		cursor: pointer;
	}

	.range-slider input[type=range]::-webkit-slider-thumb {
		appearance: none;
		width: 15px;
		height: 15px;
		border-radius: 100%;
		background: #26ae70;
	}

	input[type=range]::-webkit-slider-thumb {
		z-index: 2;
		position: relative;
		top: 2px;
		margin-top: -7px;
	}

	.range-value {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		align-items: center;
	}

	.range-value p {
		width: 49%;
    	text-align: left;
	}

	.range-value p:last-child {
		text-align: right;
	}
</style>
