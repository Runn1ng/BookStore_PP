<template>
	<div class="v-autor">
		<form @submit.prevent="sendData">
			<div class="form-control">
				<label for="firstname">Имя</label>
				<input v-model="firstname" required id="firstname" type="text">
			</div>
			<div class="form-control">
				<label for="lastname">Фамилия</label>
				<input v-model="lastname" required id="lastname" type="text">
			</div>
			<div class="form-control">
				<label for="patronymic">Отчество</label>
				<input v-model="patronymic" id="patronymic" type="text">
			</div>
			<input type="submit" class="send" value="Добавить">
	    </form>
		<router-link to="/profile">Назад</router-link>
  	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'v-autor',
	data: function () {
		return {
			firstname: '',
			lastname: '',
            patronymic: ''
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