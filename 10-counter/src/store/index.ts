import { createStore } from "vuex";

export default createStore({
  state: {
    config: {},
  },
  mutations: {
    SET_CONFIG(state, payload) {
      state.config = payload;
    },
  },
  actions: {
    SET_CONFIG({ commit }, config) {
      commit("SET_CONFIG", config);
    },
  },
  getters: {
    CONFIG: (state) => state.config,
  },
  modules: {},
});
