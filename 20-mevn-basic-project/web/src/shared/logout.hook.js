import store from "../store";

export default function useLogout() {
  store.dispatch("LOGOUT");
  localStorage.removeItem("token_eventapp");
  localStorage.removeItem("userId_eventapp");
}
