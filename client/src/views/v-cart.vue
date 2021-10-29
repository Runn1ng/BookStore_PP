<template>
	<div class="v-cart">
		<router-link :to="{name: 'catalog'}">
			<div class="v-cart__link_to_catalog">&lt;&lt;&lt; Back to catalog</div>
		</router-link>
		<h1>Cart</h1>
		<p>There are no products in cart :(</p>
		<v-cart-item />
	</div>
</template>

<script>
import VCartItem from './v-cart-item.vue'

export default {
	name: 'v-cart',
	components: {
		VCartItem
	},
	props: {},
	data() {
		return {}
	},
	computed: {}
}
</script>

<style>
.v-cart .v-cart__link_to_catalog {
	position: absolute;
	top: 10px;
	left: 10px;
	padding: 15px;
}

.v-cart a {
	text-decoration: none;
	color: black;
}
</style>