<template>
  <!--<pre>{{ isAuthenticated }}</pre>-->
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item ml-4" href="#">
        <img alt="Vue logo" src="../assets/logo.png" class="mr-3" />
        <span class="is-size-5 has-text-weight-bold">Bookmark App</span></a
      >
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        @click="toogleMenu()"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" id="navbar-links" :style="stateBurguerMenu">
      <div class="navbar-start">
        <router-link v-show="isAuth" class="navbar-item" to="/"
          >Home</router-link
        >
      </div>

      <div class="navbar-end" :style="showActions">
        <div class="navbar-item">
          <p v-show="isAuth" class="tag is-info is-medium">
            {{ user ? user.displayName : "" }}
          </p>
        </div>
        <div class="navbar-item">
          <div class="buttons">
            <a v-show="!isAuth" class="button is-link has-text-weight-bold"
              >Sign up</a
            >
            <a
              v-show="!isAuth"
              class="button is-link has-text-weight-bold"
              @click="signIn"
              >Log in</a
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

<script lang="ts">
import { computed, defineComponent, Ref, ref } from "vue";
import { useUser } from "@/hooks/useUser";
import { useNavbar } from "@/hooks/useNavbar";
import { user, firebase } from "./../config/firebase";

export default defineComponent({
  setup() {
    const isAuth: Ref<boolean | null> = ref(null);

    firebase.auth().onAuthStateChanged((user) => {
      isAuth.value = !!user;
    });

    return {
      ...useNavbar(),
      ...useUser(),
      user,
      isAuth,
      showActions: computed(() => {
        return isAuth.value !== null
          ? "display: inherit"
          : "display: none !important";
      }),
    };
  },
});
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .navbar,
  .navbar-end,
  .navbar-menu,
  .navbar-start {
    display: flex !important;
  }
}
</style>
