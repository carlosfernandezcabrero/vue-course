import { nanoid } from "nanoid";
import { createStore } from "vuex";
import Incidents from "../services/Incidents";
import UserService from "../services/UserService";

export default createStore({
  state: {
    incidents: [],
  },
  mutations: {
    LOAD_INCIDENTS: (state, payload) => (state.incidents = payload),

    PUSH_INCIDENT: (state, payload) => state.incidents.push(payload),

    UPDATE_INCIDENT: (state, payload) => {
      const index = state.incidents.findIndex((r) => r.id === payload.id);
      state.incidents[index] = payload;
    },

    DELETE_INCIDENT: (state, payload) =>
      (state.incidents = state.incidents.filter((r) => r.id !== payload)),
  },
  actions: {
    LOAD_INCIDENTS: ({ commit }) =>
      Incidents.getIncidents(JSON.parse(localStorage.getItem("user"))).then(
        (data) => commit("LOAD_INCIDENTS", data)
      ),

    PUSH_INCIDENT: ({ commit }, incident) => {
      let way = "UPDATE_INCIDENT";

      if (!incident.id.trim()) {
        incident.id = nanoid();
        way = "PUSH_INCIDENT";
      }

      Incidents.saveIncident(
        incident,
        JSON.parse(localStorage.getItem("user"))
      ).then((res) => {
        if (res !== null) commit(way, incident);
      });
    },

    DELETE_INCIDENT: ({ commit }, id) => {
      Incidents.deleteIncident(
        id,
        JSON.parse(localStorage.getItem("user"))
      ).then((res) => {
        if (res !== null) commit("DELETE_INCIDENT", id);
      });
    },

    // eslint-disable-next-line no-empty-pattern
    REGISTER_USER: ({}, user) => UserService.registerUser(user),

    // eslint-disable-next-line no-empty-pattern
    LOGIN_USER: ({}, user) => UserService.loginUser(user),
  },
  getters: {
    INCIDENTS_BY_STATE: (state) => {
      const incidentsByState = { open: [], blocked: [], closed: [] };

      state.incidents.forEach((element) => {
        incidentsByState[element.state].push({
          id: element.id,
          shortDesc: element.shortDesc,
          severity: element.severity,
          user: element.user,
        });
      });

      return incidentsByState;
    },

    INCIDENT: (state) => (id) => state.incidents.find((r) => r.id === id),
  },
  modules: {},
});
