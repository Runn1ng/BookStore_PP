<template>
	<div class="v-book">
		<form @submit.prevent="sendData">
			<div class="form-control">
				<label for="name">Название</label>
				<input v-model="name" required id="name" type="text">
			</div>
            <div class="form-control">
				<label for="publisher">Издательство</label>
				<input v-model="publisher" id="publisher" type="text">
			</div>
			<div class="form-control">
				<label for="autor">Автор</label>
				<input v-model="autor" required id="autor" type="text">
			</div>
			<div class="form-control">
				<label for="price">Цена</label>
				<input v-model="price" id="price" type="text">
			</div>
			<input type="submit" class="send" value="Добавить">
	    </form>
		<router-link to="/profile">Назад</router-link>

        <!-- Автор и Издательство - это ключи, ну я думаю ты и сам это знаешь,
        но всё равно. Будешь делать выпадающий список? Думаю что надо. -->

  	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'v-book',
	data: function () {
		return {
			name: '',
            publisher: '',
			autor: '',
            price: ''
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