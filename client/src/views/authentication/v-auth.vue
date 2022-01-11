<template>
	<div class="v-auth">
		<form @submit.prevent="sendData">
			<div class="form-control">
				<label for="login">Логин</label>
				<input v-model="login" id="login" type="text">
			</div>
			<div class="form-control">
				<label for="password">Пароль</label>
				<input v-model="password" id="password" type="password">
			</div>
			<input type="submit" class="send" value="Авторизоваться">
	    </form>
		<router-link to="/">На главную</router-link>
  	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'v-auth',
	data: function () {
		return {
			login: '',
			password: ''
		}
	},
	methods: {
		sendData() {
			axios.post('http://localhost:8081/user/login', {
				login: this.login,
				password: this.password,
			}, {withCredentials: "true"}).then(res => {
				if (res.data.result == "success") {
					this.$session.start();
					const sessionData = res.data.sessionData;
					this.$session.set('isAdmin', sessionData.isAdmin);
					this.$session.set('userName', sessionData.user_name);
					this.$session.set('userId', sessionData.user_id);
					this.$router.push('profile');
				} else {
					console.log(res.data)
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
