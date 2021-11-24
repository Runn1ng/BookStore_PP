<template>
	<div class="v-auth">
		<form @submit.prevent="sendData">
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
	name: 'v-auth',
	data: function () {
		return {
			login: '',
			password: ''
		}
	},
	methods: {
		sendData() {
			console.log(this.login, this.password);
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
