<template>
  <div class="navbar">
    <div class="brand">
      <router-link to="/">
        <h3>ChatInsta</h3>
      </router-link>
    </div>
    <div class="links">
      <router-link to="/chat">
        <h4>Chats</h4>
      </router-link>
    </div>
    <span class="actions text-right">
      <button
        type="button"
        role="button"
        class="btn sign-out bg-error"
        @click="signOut"
        v-show="userState"
      >
        Sign Out
      </button>
    </span>
  </div>
</template>

<style scoped>
.navbar {
  padding-block: 1rem;
  padding-inline: 1.4rem;
  background-color: #222831;
  color: #eeeeee;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  height: 10%;
}

.brand,
.actions {
  width: 25%;
}

.links {
  flex-grow: 1;
  text-align: center;
}

.links a {
  color: lightgray !important;
}

.links a.router-link-exact-active,
.brand a {
  color: #eeeeee !important;
}
</style>

<script lang="ts">
import { USER_COOKIE_NAME } from "@/config/globalVariables";
import { signOutService } from "@/service/authService";
import { removeLocalStorage } from "@/service/localStorageService";
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    const userState = computed(() => {
      const result = Object.keys(store.getters.getCurrentUser).length;
      return result;
    });

    const signOut = () => {
      signOutService().then(() => {
        store.dispatch("removeUnsubscribesListeners");
        store.dispatch("setUnsubscribe", []);
        removeLocalStorage(USER_COOKIE_NAME);
        store.dispatch("setCurrentUser", {});
        store.dispatch("setMessages", []);
        router.push("/logout");
      });
    };

    return { userState, signOut };
  },
});
</script>
