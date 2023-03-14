import { getNewProducts, getProducts, getTopProducts } from "@/api/products";
import { State } from "@/utils/types";
import { createStore } from "vuex";

export default createStore<State>({
  state: {
    products: [],
    newProducts: [],
    topProducts: [],
  },
  getters: {},
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_NEW_PRODUCTS(state, products) {
      state.newProducts = products;
    },
    SET_TOP_PRODUCTS(state, products) {
      state.topProducts = products;
    },
  },
  actions: {
    async getProducts({ commit }) {
      const response = await getProducts();
      if (response.status === 200) {
        commit("SET_PRODUCTS", response.data);
        return response.data;
      }
    },
    async getNewProducts({ commit }) {
      const response = await getNewProducts();
      if (response.status === 200) {
        commit("SET_NEW_PRODUCTS", response.data);
        return response.data;
      }
    },
    async getTopProducts({ commit }) {
      const response = await getTopProducts();
      if (response.status === 200) {
        commit("SET_TOP_PRODUCTS", response.data);
        return response.data;
      }
    },
  },
  modules: {},
});
