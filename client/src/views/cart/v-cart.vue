<template>
	<div class="v-cart">
		<router-link :to="{name: 'catalog'}">
			<div class="v-cart__link_to_catalog">&lt;&lt;&lt; Back to catalog</div>
		</router-link>
		<h1>Cart</h1>
		<p v-if="!cart_data.length">There are no products in cart :(</p>
		<v-cart-item 
			v-for="(item, index) in cart_data"
			:key="item.article"
			:cart_item_data="item"
			@deleteFromCart="deleteFromCart(index)"
			@increment="increment(index)"
			@decrement="decrement(index)"
		/>
		<div class="v-cart__total">
			<p class="total_name">Total:</p>
			<p>{{cartTotalCost}} р</p>
		</div>
	</div>
</template>

<script>
import VCartItem from './v-cart-item.vue'
import {mapActions} from 'vuex'

export default {
	name: 'v-cart',
	components: {
		VCartItem
	},
	props: {
		cart_data: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	data() {
		return {}
	},
	computed: {
		cartTotalCost() {
			let result = [];

			for (let item of this.cart_data) {
				result.push(item.price * item.quantity);
			}

			if (result.length) {
				return result = result.reduce(function (sum, el) {
					return sum + el;
				});
			}
			else{
				return 0;
			}
		}
	},
	methods: {
		...mapActions([
			'DELETE_FROM_CART',
			'INCREMENT_CART_ITEM',
            'DECREMENT_CART_ITEM'
		]),
		increment(index) {
			this.INCREMENT_CART_ITEM(index);
		},
		decrement(index) {
			this.DECREMENT_CART_ITEM(index);
		},
		deleteFromCart(index) {
			this.DELETE_FROM_CART(index);
		}
	}
}
</script>

<style>
.v-cart {
	width: 60%;
	margin: 0 auto;
	margin-bottom: 100px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}

.v-cart .v-cart__link_to_catalog {
	position: absolute;
	top: 110px;
	left: 10px;
	padding: 15px;
    border: 1px solid #aeaeae;
}

.v-cart .v-cart-item {
	width: 100%;
}

.v-cart h1 {
	width: 100%;
}

.v-cart a {
	text-decoration: none;
	color: black;
}

.v-cart__total {
	display: flex;
	justify-content: center;
	position: fixed;
	bottom: 0;
	right: 0;
	left: 0;
	padding: 15px;
	background: #26ae70;
	color: #ffffff;
	font-size: 20px;
}

.v-cart__total .total_name {
	margin-right: 8px;
}
</style>