
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({ //Глобальная база знаний нашего приложенияS
	state: {//состоя ние переменных. объектов, массивов...
		products: [ //В данный массив будем класть полученные данные из файла db.json, как из фейкового API

		],
	},
	mutations: {//с помощью мутаций мы будем менять состояние объектов в state. Мутации выполняются синхронно (последовательно) - по очереди.
		SET_PRODUCTS_TO_STATE: (state, products) => {
			state.products = products;
		},

	},
	actions: {//вызываются, когда необходимы асинхронные (одновременное) выполнения действий
		GET_PRODUCTS_FROM_API({ commit }) {
			return axios('http://localhost:3000/products', {//адрес был указан при запуске json-server
				method: "GET"
			})
				.then((products) => {
					commit('SET_PRODUCTS_TO_STATE', products.name);
					return products;
				})
				.catch((error) => {
					console.log(error);
					return error;
				});
		},
	},
	getters: {//короткий путь для получения информации о state
		PRODUCTS(state) {
			return state.products;
		}
	},
});

export default store;
