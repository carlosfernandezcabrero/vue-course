import { createApp } from "vue";
import App from "./App.vue";
import { auth } from "./config/firebase";
import router from "./router";
import { createUserObject } from "./service/userService";
import store from "./store";

auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch("setCurrentUser", createUserObject(user));
  }
});

createApp(App).use(store).use(router).mount("#app");
