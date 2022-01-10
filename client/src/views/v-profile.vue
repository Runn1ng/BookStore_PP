<template>
	<div class="v-profile">
		<h1>Личный профиль</h1>
		<div class="v-profile__contanier">
			<div class="v-profile__info">
				<img src="../assets/avatar/-H26rt5j56E.jpg" alt="" class="avatar">
				<div class="fio">
					<p>Зубенко Михаил Петрович</p>
				</div>
			</div>
			<div class="v-profile__order">
				<h2>Список заказов</h2>
				<div class="order-items">
					<div class="item">
						<span>Name of book</span>
						<span>Article</span>
						<span>1000 р.</span>
					</div>
				</div>
			</div>
			<div class="v-profile__admin-panel">
				<h2>Админ панель</h2>
				<!-- <router-link :to="{name: ''}">
					<div class="v-profile__link-to-db">Изменить поставщиков</div>
				</router-link>
				<router-link :to="{name: ''}">
					<div class="v-profile__link-to-db">Изменить книгу</div>
				</router-link>
				<router-link :to="{name: ''}">
					<div class="v-profile__link-to-db">Изменить автора</div>
				</router-link> -->
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-profile',
		components: {},
		props: {},
		data() {
			return {}
		},
		computed: {},
		methods: {},
	}
</script>

<style>
	.v-profile {
		width: 80%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-start; 
		margin: 0 auto;
	}

	.v-profile h1 {
		width: 100%;
		margin-bottom: 30px;
	}

	.v-profile a {
		text-decoration: none;
		color: #2C3E50;
	}

	.v-profile .v-profile__contanier {
		width: 100%;
		display: flex;
		justify-content: space-between;
		/* flex-wrap: wrap;
		flex-direction: row; */
	}

	.v-profile .v-profile__contanier > div {
		border-radius: 15px;
    	box-shadow: 0 0 8px 0 #c0c0c0;
		padding: 15px;
		display: flex;
		flex-wrap: wrap;
	}

	.v-profile .v-profile__contanier .v-profile__info {
		width: 25%;
		flex-direction: column;
		align-content: center;
		justify-content: space-between;
	}

	.v-profile .v-profile__contanier .v-profile__info .avatar,
	.v-profile .v-profile__contanier .v-profile__info .fio {
		width: 80%;
	}

	.v-profile .v-profile__contanier .v-profile__info .avatar {
		margin-top: 10px;
		border-radius: 10px;
	}

	.v-profile .v-profile__contanier .v-profile__info p {
		width: 100%;
		font-size: 20px;
		text-align: center;
		margin-top: 20px;
    	margin-bottom: 10px;
	}

	.v-profile .v-profile__contanier .v-profile__order {
		width: 42%;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.v-profile .v-profile__contanier .v-profile__order h2,
	.v-profile .v-profile__contanier .v-profile__admin-panel h2 {
		width: 100%;
	}

	.v-profile .v-profile__contanier .v-profile__order .order-items {
		width: 80%;
		height: 297px;
		padding: 4px;
		overflow-y: scroll;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: flex-start;
	}

	.v-profile .v-profile__contanier .v-profile__order .order-items::-webkit-scrollbar {
		width: 2px;
		background: #FFFFFF;
	}

	.v-profile .v-profile__contanier .v-profile__order .order-items::-webkit-scrollbar-thumb {
		background-color: #c0c0c0;
	}

	.v-profile .v-profile__contanier .v-profile__order .order-items .item {
		width: 95%;
		display: flex;
		box-shadow: 0 0 5px 0 #c0c0c0;
		border-radius: 5px;
		margin-bottom: 10px;
		font-size: 18px;
		padding: 10px;
		align-items: center;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-between;
	}

	.v-profile .v-profile__contanier .v-profile__admin-panel {
		width: 25%;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.v-profile .v-profile__contanier .v-profile__admin-panel a {
		text-decoration: none;
		color: #2C3E50;
	}

	.v-profile .v-profile__contanier .v-profile__admin-panel .v-profile__link-to-db {
		width: 92%;
		padding: 15px;
		margin-bottom: 5px;
		font-size: 18px;
	}
</style>
