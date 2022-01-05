<template>
	<div class="v-header">
        <router-link :to="{name: 'catalog'}">
            <img src="../../assets/logo.png" alt="">
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
                <i class="material-icons" @click="clearSearchField()">cancel

                </i>
            </button>
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
        background: #0aa9be;
        padding: 15px;
        top: 0;
        left: 0;
    }

    .v-header img {
        width: 50px;
    }

    .v-header .search-filed {
        display: flex;
        justify-content: center;
        /* align-items: center; */
        position: relative;
        padding: 15px;
        right: 200px;
    }
    
    .v-header .search-btn {
        margin-left: 15px;
        background: transparent;
        border: none;
        cursor: pointer;
    }
</style>