import axios from 'axios'

export default {
    GET_PRODUCTS_FROM_API({commit}) {
        return axios('http://localhost:8081/books', {
            method: "GET",
            withCredentials: true,
        })
        .then((products) => {
            commit('SET_PRODUCTS_TO_STATE', products.data);
            return products;
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
    }
}