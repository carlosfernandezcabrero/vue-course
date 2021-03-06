import { createStore } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";

export default createStore({
  state,
  mutations,
  actions,
  getters: {
    getCurrentUser: (state) => state.currentUser,
    getUnsubscribes: (state) => state.unsubscribes,
    getMessages: (state) => state.messages,
  },
});
