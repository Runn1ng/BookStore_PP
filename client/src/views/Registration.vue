<template>
	<div class="registration">
		<form @submit.prevent="sendData">
			<div class="form-control">
				<label for="name">Name</label>
				<input v-model="name" id="name" type="text">
			</div>
			<div class="form-control">
				<label for="login">Login</label>
				<input v-model="login" id="login" type="text">
			</div>
			<div class="form-control">
				<label for="password">Password</label>
				<input v-model="password" id="password" type="text">
			</div>
			<input type="submit" class="send" value="Send">
	    </form>
		<router-link to="/">Home</router-link>
  	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'registration',
	data: function () {
		return {
			name: '',
			login: '',
			password: '',
			admin: false
		}
	},
	methods: {
		sendData() {
			console.log(this.name, this.login, this.password, this.admin);
			this.$router.push('detail');
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
