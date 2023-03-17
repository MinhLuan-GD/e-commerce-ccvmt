import { get3Cate } from "@/api/category";
import { getNewProducts, getProducts, getTopProducts } from "@/api/product";
import { getCurrentUser } from "@/api/user";
import { CartItem } from "@/models/cart-item";
import { State } from "@/utils/types";
import { createStore } from "vuex";

export default createStore<State>({
  state: {
    "3cate": [],
    user: null,
    products: [],
    newProducts: [],
    topProducts: [],
    cart: [],
  },
  getters: {},
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_NEW_PRODUCTS(state, products) {
      state.newProducts = products;
    },
    SET_TOP_PRODUCTS(state, products) {
      state.topProducts = products;
    },
    SET_THREE_CATE(state, categories) {
      state["3cate"] = categories;
    },
    SET_CART(state, cart) {
      state.cart = cart;
    },
    CLEAR_CART(state) {
      state.cart = [];
      localStorage.setItem("cart", "[]");
    },
    PUSH_TO_CART(state, cartItem: CartItem) {
      const index = state.cart.findIndex(
        (item) => item.product._id === cartItem.product._id
      );
      if (index !== -1) {
        state.cart[index].quantity += cartItem.quantity;
      } else state.cart.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    POP_FROM_CART(state, productId: string) {
      const index = state.cart.findIndex(
        (item) => item.product._id === productId
      );
      if (index !== -1) {
        state.cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user);
    },
    async getUser({ commit }) {
      const response = await getCurrentUser();
      if (response.status === 200) {
        commit("SET_USER", response.data);
        return response.data;
      } else if (response.status === 401) {
        commit("SET_USER", null);
      }
    },
    logout({ commit }) {
      commit("SET_USER", null);
    },
    setProducts({ commit }, products) {
      commit("SET_PRODUCTS", products);
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
    async getThreeCate({ commit }) {
      const response = await get3Cate();
      if (response.status === 200) {
        commit("SET_THREE_CATE", response.data);
        return response.data;
      }
    },
    getLocalCart({ commit }) {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      commit("SET_CART", cart);
    },
    pushToCart({ commit }, cartItem: CartItem) {
      commit("PUSH_TO_CART", cartItem);
    },
    popFromCart({ commit }, productId: string) {
      commit("POP_FROM_CART", productId);
    },
    setCart({ commit }, cart) {
      commit("SET_CART", cart);
    },
    clearCart({ commit }) {
      commit("CLEAR_CART");
    },
  },
  modules: {},
});
