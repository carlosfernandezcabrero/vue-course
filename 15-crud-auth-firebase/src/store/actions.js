import { auth } from "@/config/firebase";
import DBService from "@/services/db.service";

export const SET_INITIAL_BOOKMARKS = ({ commit }) => {
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const dbs = new DBService();
      const data = await dbs.getAll(user);
      commit("SET_USER", user);
      commit("SET_INITIAL_BOOKMARKS", data);
      return;
    }
    commit("SET_USER", {});
  });
};

export const ADD_BOOKMARK = async ({ commit }, bookmark) => {
  const dbs = new DBService();

  if (!bookmark.id) {
    return await dbs.addData(bookmark).then(() => {
      commit("ADD_BOOKMARK", bookmark);
      return;
    });
  }
  if (bookmark.id) {
    return await dbs.updateBookmark(bookmark).then(() => {
      commit("UPDATE_BOOKMARK", bookmark);
      return;
    });
  }
};

export const DELETE_BOOKMARK = ({ commit }, id) => {
  const dbs = new DBService();
  dbs.deleteBookmark(id).then(() => {
    commit("DELETE_BOOKMARK", id);
  });
};

export const SET_USER = ({ commit }, user) => commit("SET_USER", user);

export const RESET = ({ commit }) => commit("SET_INITIAL_BOOKMARKS", []);
