import { createStore } from "vuex";
import { BookmarkModel } from "./../models/bookmark.model";
import { addData, deleteBookmark, updateBookmark } from "@/hooks/useDB";

export default createStore({
  state: {
    bookmarks: Array<BookmarkModel>(),
  },
  mutations: {
    SET_INITIAL_BOOKMARKS: (state, payload) => {
      state.bookmarks = payload;
    },

    ADD_BOOKMARK: (state, payload) => {
      state.bookmarks.push(payload);
    },

    UPDATE_BOOKMARK: (state, payload) => {
      const idx = state.bookmarks.findIndex((r) => r.id === payload.id);
      state.bookmarks[idx] = payload;
    },

    DELETE_BOOKMARK: (state, payload) => {
      state.bookmarks = state.bookmarks.filter((bookm) => bookm.id !== payload);
    },
  },
  actions: {
    SET_INITIAL_BOOKMARKS: ({ commit }, bookmarks) => {
      commit("SET_INITIAL_BOOKMARKS", bookmarks);
    },

    ADD_BOOKMARK: async ({ commit }, bookmark) => {
      if (!bookmark.id) {
        return await addData(bookmark).then(() => {
          commit("ADD_BOOKMARK", bookmark);
          return;
        });
      }
      if (bookmark.id) {
        return await updateBookmark(bookmark).then(() => {
          commit("UPDATE_BOOKMARK", bookmark);
          return;
        });
      }
    },

    DELETE_BOOKMARK: ({ commit }, id) => {
      deleteBookmark(id).then(() => {
        commit("DELETE_BOOKMARK", id);
      });
    },
  },
  getters: {
    GET_BOOKMARKS: (state) => state.bookmarks,

    GET_BY_ID: (state) => (id: string) =>
      state.bookmarks.find((r) => r.id === id),
  },
});
