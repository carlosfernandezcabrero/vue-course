import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
  },
  mutations: {
    LOAD_PRODUCTS: (state, payload) => (state.products = payload),
  },
  actions: {
    GET_PRODUCTS: async ({ commit }) => {
      await axios
        .get("/api.json")
        .then((response) => response.data)
        .then((response) => commit("LOAD_PRODUCTS", response));
    },
  },
  getters: {
    PRODUCTS: (state) => state.products,
    BY_ID: (state) => (id) => state.products.find((r) => r.id == id),
    BY_NAME: (state) => (name) =>
      state.products.filter((r) =>
        r.name.toLowerCase().includes(name.toLowerCase())
      ),
  },
  modules: {},
});
