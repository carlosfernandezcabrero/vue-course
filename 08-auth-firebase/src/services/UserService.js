import axios from "axios";
import { useStore } from "vuex";

export default class UserService {
  static apiKey = () => "AIzaSyAbYA1iedTebB1YvYx8KhiIri1p3Orbefg";
  static url = () => "https://identitytoolkit.googleapis.com/v1/accounts:";

  static async registerUser(user) {
    const data = {
      email: user.email,
      password: user.password,
      returnSecureToken: true,
    };

    return await axios
      .post(
        `${UserService.url()}signUp?key=${UserService.apiKey()}`,
        JSON.stringify(data),
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => response.data)
      .catch((err) => err.response.data);
  }

  static async loginUser(user) {
    const data = {
      email: user.email,
      password: user.password,
      returnSecureToken: true,
    };

    return await axios
      .post(
        `${UserService.url()}signInWithPassword?key=${UserService.apiKey()}`,
        JSON.stringify(data),
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => response.data)
      .catch((err) => err.response.data);
  }

  static syncLocalStorageVuex(user) {
    const store = useStore();
    store.dispatch("PUSH_USER", user);
  }
}
