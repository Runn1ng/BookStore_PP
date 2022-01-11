<template>
	<div class="v-supplier">
		<form @submit.prevent="sendData">
			<div class="form-control">
				<label for="book">Книга</label>
				<input v-model="book" required id="book" type="text">
			</div>
            <div class="form-control">
				<label for="price">Цена покупки</label>
				<input v-model="price" id="price" type="text">
			</div>
			<div class="form-control">
				<label for="date">Дата покупки</label>
				<input v-model="date" required id="date" type="text">
			</div>
			<div class="form-control">
				<label for="quantity">Количество</label>
				<input v-model="quantity" id="quantity" type="text">
			</div>
			<input type="submit" class="send" value="Добавить">
	    </form>
		<router-link to="/profile">Назад</router-link>

        <!-- Книга - это ключ, ну я думаю ты и сам это знаешь,
        но всё равно. Будешь делать выпадающий список? Думаю что надо. -->

  	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'v-supplier',
	data: function () {
		return {
			book: '',
            price: '',
			date: '',
            quantity: ''
		}
	},
	methods: {
		sendData() {
		}
	},
}
</script>

<style>
	.form-control {
		padding: 5px;
	} 
	
	.form-control label {
		display: block;
	}

	.send {
		margin: 5px;
	}

	.hide {
		display: none;
	}
</style>