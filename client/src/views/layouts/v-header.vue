<template>
	<div class="v-header">
        <router-link :to="{name: 'catalog'}">
            <img src="../../assets/logo.png" alt="" class="logo">
        </router-link>
        <div class="search-filed">
            <input 
                type="text" 
                v-model="searchValue"
            >
            <button class="search-btn">
                <i class="material-icons" @click="search(searchValue)">search</i>
            </button>
            <button class="search-btn">
                <i class="material-icons" @click="clearSearchField()">cancel</i>
            </button>
        </div>
        <div class="auth-block">
            <!-- <router-link :to="{name: 'login'}">
                <div class="v-header__link-to-login">Войти</div>
            </router-link>
            <router-link :to="{name: 'registration'}">
                <div class="v-header__link-to-reg">Регистрация</div>
            </router-link> -->

            <router-link :to="{name: 'profile'}">
                <div class="v-header__link-to-profile">Профиль</div>
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
	name: 'v-header',
	components: {},
	props: {},
	data() {
		return {
            searchValue: ''
        }
	},
	computed: {
        ...mapGetters([
            'SEARCH_VALUE'
        ]),
    },
    methods: {
        ...mapActions([
            'GET_SEARCH_VALUE_TO_VUEX'
        ]),
        search(value) {
            this.GET_SEARCH_VALUE_TO_VUEX(value);
            
            if (this.$route.path !== '/')
                this.$router.push('/');
        },
        clearSearchField() {
            this.searchValue = '';
            this.GET_SEARCH_VALUE_TO_VUEX();

            if (this.$route.path !== '/')
                this.$router.push('/');
        }
    }
}
</script>

<style>
    .v-header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        background: #5BD3C7;
        padding: 15px;
        top: 0;
        left: 0;
    }

    .v-header img {
        width: 50px;
        position: relative;
        left: 10px;
    }

    .v-header .search-filed {
        width: 45%;
        display: flex;
        justify-content: center;
        /* align-items: center; */
        position: relative;
        padding: 15px;
        left: 95px;
    }

    .v-header input[type="text"] {
        width: 89%;
    }
    
    .v-header .search-btn {
        width: 5%;
        margin-left: 15px;
        background: transparent;
        border: none;
        cursor: pointer;
    }

    .v-header .auth-block {
        width: 11%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        position: relative;
        right: 20px;
    }

    .v-header a {
        text-decoration: none;
        color: #2C3E50;
    }

    .v-header .v-header__link-to-login,
    .v-header .v-header__link-to-reg {
        padding: 15px;
        border: 1px solid #2C3E50;
    }

    .v-header .v-header__link-to-profile {
        padding: 15px;
        border: 1px solid #2C3E50;
        position: relative;
        left: 45px;
    }
</style>