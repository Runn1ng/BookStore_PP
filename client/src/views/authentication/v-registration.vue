<template>
	<div class="v-registration">
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
			<div class="form-control">
				<label for="login">Логин</label>
				<input v-model="login" required id="login" type="text">
			</div>
			<div class="form-control">
				<label for="password">Пароль</label>
				<input v-model="password" required id="password" type="password">
			</div>
			<input type="submit" class="send" value="Зарегистрироваться">
	    </form>
		<router-link to="/">На главную</router-link>
  	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'v-registration',
	data: function () {
		return {
			firstname: '',
			lastname: '',
			patronymic: '',
			login: '',
			password: '',
			is_admin: false
		}
	},
	methods: {
		sendData() {

			axios.post('http://localhost:8081/user/registration', {
				firstname: this.firstname,
				lastname: this.lastname,
				patronymic: this.patronymic,
				login: this.login,
				password: this.password,
				is_admin: false
			}, {withCredentials: true}).then(res => {
				if (res.data.result == "success") {
					this.$router.push('login');
				}
			})
				
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
