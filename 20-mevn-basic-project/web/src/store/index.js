import { createStore } from "vuex";
import { getUser, isAuth } from "../shared/auth.service";

export default createStore({
  state: {
    isAuth: isAuth(),
    user: getUser(),
  },
  mutations: {
    LOGIN(state, payload) {
      state.isAuth = true;
      state.user = payload;
    },
    LOGOUT(state) {
      state.isAuth = false;
      state.user = {};
    },
  },
  actions: {
    LOGIN({ commit }, payload) {
      commit("LOGIN", payload);
    },
    LOGOUT({ commit }) {
      commit("LOGOUT");
    },
  },
  getters: {
    GET_AUTH_STATE: (state) => state.isAuth,
    GET_USER: (state) => state.user,
  },
});
