import { createStore } from "vuex";
import { Color } from "../models/color.model";
import { ColorService } from "./../services/color.service";

export default createStore({
  state: {
    colors: new Array<any>(),
  },
  mutations: {
    addColor(state, payload: Color) {
      state.colors.push(payload);
    },
  },
  actions: {
    loadData({ commit }) {
      ColorService.loadColor().then((data: any) => {
        data.forEach((element: any) => {
          commit("addColor", {
            colorId: element["colorId"],
            hexString: element.hexString,
            name: element.name,
          });
        });
      });
    },
  },
  getters: {
    colors: (state) => state.colors,

    find: (state) => (name: string) =>
      state.colors.find(
        (r: any) => r.name.toLowerCase() === name.toLowerCase()
      ),
  },
  modules: {},
});
