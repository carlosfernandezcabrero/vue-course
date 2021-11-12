import { createStore } from "vuex";
import { nanoid } from "nanoid";

export default createStore({
  state: {
    incidents: [],
  },
  mutations: {
    LOAD_INCIDENTS: (state, payload) => (state.incidents = payload),
    PUSH_INCIDENT: (state, payload) => {
      state.incidents.push(payload);
      localStorage.setItem("incidents", JSON.stringify(state.incidents));
    },
    UPDATE_INCIDENT: (state, payload) => {
      const index = state.incidents.findIndex((r) => r.id === payload.id);
      state.incidents[index] = payload;
      localStorage.setItem("incidents", JSON.stringify(state.incidents));
    },
    DELETE_INCIDENT: (state, payload) => {
      state.incidents = state.incidents.filter((r) => r.id !== payload);
      localStorage.setItem("incidents", JSON.stringify(state.incidents));
    },
  },
  actions: {
    LOAD_INCIDENTS: ({ commit }) => {
      if (localStorage.getItem("incidents")) {
        const incidents = JSON.parse(localStorage.getItem("incidents"));
        commit("LOAD_INCIDENTS", incidents);
      }
      return;
    },
    PUSH_INCIDENT: ({ commit }, incident) => {
      if (!incident.id.trim()) {
        incident.id = nanoid();
        commit("PUSH_INCIDENT", incident);
      } else {
        commit("UPDATE_INCIDENT", incident);
      }
    },
    DELETE_INCIDENT: ({ commit }, id) => commit("DELETE_INCIDENT", id),
  },
  getters: {
    INCIDENTS: (state) => state.incidents,
    INCIDENTS_BY_STATE: (state) => {
      const incidentsByState = { open: [], blocked: [], closed: [] };
      state.incidents.forEach((element) =>
        incidentsByState[element.state].push({
          id: element.id,
          shortDesc: element.shortDesc,
          severity: element.severity,
          user: element.user,
        })
      );
      return incidentsByState;
    },
    INCIDENT: (state) => (id) => state.incidents.find((r) => r.id === id),
  },
  modules: {},
});
