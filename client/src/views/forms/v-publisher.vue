<template>
	<div class="v-publisher">
		<form @submit.prevent="sendData">
			<div class="form-control">
				<label for="name">Имя</label>
				<input v-model="name" required id="name" type="text">
			</div>
			<input type="submit" class="send" value="Добавить">
	    </form>
		<router-link to="/profile">Назад</router-link>
  	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'v-author',
	data: function () {
		return {
			name: '',
		}
	},
	methods: {
		sendData() {
			axios.post('http://localhost:8081/publisher/', {
				firstname: this.name,
			}, {withCredentials: "true"}).then(res => {
				this.$router.push('profile');
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