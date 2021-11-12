import { HeroModel } from "@/models/hero.model";
import { HeroService } from "@/services/hero.service";
import { createStore } from "vuex";

export default createStore({
  state: {
    heroes: [],
  },
  mutations: {
    LOAD_HEROES(state, payload) {
      state.heroes = payload;
    },
  },
  actions: {
    LOAD_HEROES({ commit }) {
      HeroService.getHeroes().then((data) => {
        commit("LOAD_HEROES", data);
      });
    },
  },
  getters: {
    HEROES: (state) => state.heroes,

    HERO: (state) => (name: string) =>
      state.heroes.find(
        (r: HeroModel) => r.name.toLowerCase() === name.toLowerCase()
      ),
  },
  modules: {},
});
