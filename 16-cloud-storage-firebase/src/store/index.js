import { createStore } from "vuex";

export default createStore({
  state: {
    currentUser: {},
  },
  mutations: {
    setCurrentUser(state, payload) {
      state.currentUser = payload;
    },
  },
  actions: {
    setCurrentUser({ commit }, user) {
      commit("setCurrentUser", user);
    },
  },
  getters: {
    getCurrentUser(state) {
      return state.currentUser;
    },
  },
});
