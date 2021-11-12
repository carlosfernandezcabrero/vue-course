import { createUserObject, getUser } from "@/app/service/userService";
import { auth } from "@/config/firebase";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

auth.onAuthStateChanged((user) => {
  if (user) {
    getUser(user.uid).then((result) => {
      if (result.exists) {
        store.dispatch("setCurrentUser", createUserObject(result.data()));
      }
    });
  }
});

createApp(App).use(store).use(router).mount("#app");
