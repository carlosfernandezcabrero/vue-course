export const SET_INITIAL_BOOKMARKS = (state, payload) => {
  state.bookmarks = payload;
};

export const ADD_BOOKMARK = (state, payload) => {
  state.bookmarks.push(payload);
};

export const UPDATE_BOOKMARK = (state, payload) => {
  const idx = state.bookmarks.findIndex((r) => r.id === payload.id);
  state.bookmarks[idx] = payload;
};

export const DELETE_BOOKMARK = (state, payload) => {
  state.bookmarks = state.bookmarks.filter((bookm) => bookm.id !== payload);
};

export const SET_USER = (state, payload) => {
  state.user = payload;
};
