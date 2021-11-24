<template>
	<div class="v-catalog-item">

		<v-popup
			v-if="isInfoPopupVisible"
			:popupTitle = "product_data.name"
			rightBtnTitle = "Add to cart"
			@closePopup = "closeInfoPopup"
			@rightBtnAction = "addToCart"
		>
			<img class="v-catalog-item__img" :src="require('../../assets/images/' + product_data.image)" alt="img">
			<div class="cont_wrap">
				<p class="v-catalog-item__author">{{product_data.author}}</p>
				<p class="v-catalog-item__pub-house">{{product_data.pubHouse}}</p>
				<p class="v-catalog-item__article">{{product_data.article}}</p>
				<p class="v-catalog-item__price">Price: {{product_data.price}}</p>
			</div>
			
		</v-popup>

		<img class="v-catalog-item__img" :src="require('../../assets/images/' + product_data.image)" alt="img">
		<p class="v-catalog-item__name">{{product_data.name}}</p>
		<span class="v-catalog-item__author">{{product_data.author}}</span>
		<span class="v-catalog-item__price">Price: {{product_data.price}}</span>
		<button
			class="v-catalog-item__show-info"
			@click="showPopupInfo"
		>Show info</button>
		<button 
			class="v-catalog-item__add-to-cart" 
			@click="addToCart"
		>Add to cart</button>
	</div>
</template>

<script>
	import vPopup from '../popup/v-popup.vue'

	export default {
		name: 'v-catalog-item',
		components: {
			vPopup
		},
		props: {
			product_data: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				isInfoPopupVisible: false
			}
		},
		computed: {},
		methods: {
			showPopupInfo() {
				this.isInfoPopupVisible = true;
			},
			closeInfoPopup() {
				this.isInfoPopupVisible = false;
			},
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

	.v-catalog-item__img {
		width: 50%;
		margin: 0 auto;
	}

	.v-catalog-item__name,
	.v-catalog-item p {
		width: 100%;
	}

	.v-catalog-item span {
		width: 49%;
	}

	.v-catalog-item__add-to-cart,
	.v-catalog-item__show-info {
		margin: 0 auto;
		margin-top: 20px;
		padding: 8px 16px;
		border: 0;
		border-radius: 5px;
		background: #26ae70;
		color: #ffffff;
	}

	.v-catalog-item__show-info {
		background: #fa8013;
	}

	.cont_wrap {
		width: 45%;
	}
</style>