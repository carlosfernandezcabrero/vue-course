import { createStore } from "vuex";
import * as actions from "./actions";
import * as mutations from "./mutations";

const state = {
  bookmarks: [],
  user: {},
};

const getters = {
  GET_BOOKMARKS: (state) => state.bookmarks,

  GET_BY_ID: (state) => (id) => state.bookmarks.find((r) => r.id === id),

  GET_USER: (state) => state.user,
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
