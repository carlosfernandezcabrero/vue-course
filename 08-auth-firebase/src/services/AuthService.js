import { ref } from "vue";

export default class AuthService {
  static state = ref(false);

  static saveToken(user) {
    localStorage.setItem("user", JSON.stringify(user));
    AuthService.state.value = true;
  }

  static removeToken() {
    localStorage.removeItem("user");
    AuthService.state.value = false;
  }

  static isAuthenticated(state) {

    if (state.value === false) {
      if (localStorage.getItem("user")) {
        AuthService.state.value = true;
        return true;
      }
      return false;
    }

    return true;
  }
}
