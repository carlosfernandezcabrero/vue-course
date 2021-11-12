import { MutationTree } from "vuex";
import { IState } from "./state";

export const mutations: MutationTree<IState> = {
  setCurrentUser: (state, payload) => (state.currentUser = payload),

  addUnsubscribe: (state, payload) => state.unsubscribes.push(payload),
  setUnsubscribe: (state, payload) => (state.unsubscribes = payload),

  setMessages: (state, payload) => (state.messages = payload),
};
