import api from "@/api";
import { getProducts } from "@/api/products";
import { State } from "@/utils/types";
import { createStore } from "vuex";

export default createStore<State>({
  state: {
    products: [],
  },
  getters: {},
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await getProducts();
      if (response.status === 200) {
        commit("setProducts", response.data);
      }
    },
  },
  modules: {},
});
