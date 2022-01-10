<template>
	<div class="v-cart-item">
        <img :src="require('../../assets/images/' + cart_item_data.image)" alt="img">
		<div class="v-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}} р.</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="v-cart-item__quantity">
            <p>Количество:</p>
            <span>
                <span @click="decrementItem" class="quantity_btn">-</span>
                {{cart_item_data.quantity}}
                <span @click="incrementItem" class="quantity_btn">+</span>
            </span>
        </div>
        <button @click="deleteFromCart">Удалить</button>
    </div>
</template>

<script>
export default {
	name: 'v-cart-item',
	components: {},
	props: {
        cart_item_data: {
            type: Object,
            default() {
                return {};
            }
        }
    },
	data() {
		return {}
	},
	computed: {},
    methods: {
        incrementItem() {
            this.$emit('increment');
        },
        decrementItem() {
            this.$emit('decrement');
        },
        deleteFromCart() {
            this.$emit('deleteFromCart');
        }
    }
}
</script>

<style>
.v-cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding: 16px;
    box-shadow: 0 0 8px 0 #c0c0c0;
}

.v-cart-item img {
    max-width: 50px;
}

.v-cart-item__quantity .quantity_btn {
    margin: 2px;
    padding: 5px;
    cursor: pointer;
    font-size: 20px;
}
</style>