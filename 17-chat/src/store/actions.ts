import { ActionTree } from "vuex";
import { IState } from "./state";

export const actions: ActionTree<IState, IState> = {
  setCurrentUser: ({ commit }, user) => commit("setCurrentUser", user),

  addUnsubscribe: ({ commit }, unsubscribe) =>
    commit("addUnsubscribe", unsubscribe),
  removeUnsubscribesListeners: ({ getters }) => {
    const unsubscribes = getters.getUnsubscribes;
    unsubscribes.forEach((element: { (): void }) => element());
  },
  setUnsubscribe: ({ commit }, payload) => commit("setUnsubscribe", payload),

  setMessages: ({ commit }, payload) => commit("setMessages", payload),
};
