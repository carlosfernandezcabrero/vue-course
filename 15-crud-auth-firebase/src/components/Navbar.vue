<template>
  <!--<pre>{{ isAuthenticated }}</pre>-->
  <nav class="nav" role="navigation" aria-label="main navigation">
    <router-link class="nav-brand" to="/">
      <img alt="Vue logo" src="../assets/logo.png" height="60" width="60" />
      <span class="is-size-5 has-text-weight-bold">Bookmark App</span>
    </router-link>

    <div class="nav-menu">
      <div class="actions center-items" :style="showActions">
        <div class="action">
          <p v-show="isAuth" class="has-text-weight-bold username-label">
            {{ userDisplayName }}
          </p>
        </div>
        <div class="action">
          <div class="buttons">
            <router-link
              v-show="!isAuth"
              class="button is-link has-text-weight-bold"
              to="/register"
              >Sign up</router-link
            >
            <router-link
              v-show="!isAuth"
              class="button is-link has-text-weight-bold"
              to="/login"
              >Log in</router-link
            >
            <a
              v-show="isAuth"
              class="button is-danger has-text-weight-bold"
              @click="signOut"
              >Log out</a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useUser } from "@/hooks/useUser";
import { useNavbar } from "@/hooks/useNavbar";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const user = computed(() => store.getters.GET_USER);
    const isAuth = computed(() => Object.keys(user.value).length);

    return {
      ...useNavbar(),
      ...useUser(),
      userDisplayName: computed(() => {
        return user.value?.email?.split("@")[0];
      }),
      isAuth,
      showActions: computed(() => {
        return isAuth.value !== null
          ? "display: flex"
          : "display: none !important";
      }),
    };
  },
});
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 1.5rem;
  padding-block: 1rem;
}
.nav-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-grow: 1;
}
.nav-menu {
  flex-grow: 1;
}
.buttons {
  justify-content: center;
  gap: 1rem;
}
.buttons .button {
  margin-right: 0 !important;
}
.username-label {
  border-bottom: black solid 2px;
  padding-inline: 1rem;
}
</style>
