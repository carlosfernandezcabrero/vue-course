<template>
  <div class="navbar md-cont">
    <div class="navbar__brand">
      <h2 class="navbar__brand__text">EventApp</h2>
    </div>
    <div class="navbar__menu">
      <router-link to="/" class="navbar__menu__link" v-show="!isAuth">
        <h5>Home</h5>
      </router-link>
      <router-link to="/events" class="navbar__menu__link" v-show="!isAuth">
        <h5>Events</h5>
      </router-link>
      <router-link to="/about" class="navbar__menu__link" v-show="!isAuth">
        <h5>About</h5>
      </router-link>
    </div>
    <div class="navbar__actions">
      <router-link class="action" id="admin" to="/admin" v-show="!isAuth">
        <h5>Admin</h5>
      </router-link>
      <button class="btn bg-error action" v-show="isAuth" @click="logout">
        Sign out
      </button>
    </div>
  </div>
</template>

<style>
.navbar {
  padding-top: 1.8rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__brand,
.navbar__actions {
  width: 25%;
}

.action {
  float: right;
}

.navbar__brand__text {
  color: var(--color-primary);
  font-family: "Playball", cursive;
}

.navbar__menu {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.navbar__menu__link:hover {
  color: var(--color-secondary);
}

.navbar__menu__link.router-link-exact-active {
  color: var(--color-tertiary);
}
</style>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import useLogout from "@/shared/logout.hook";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const isAuth = computed(() => store.getters.GET_AUTH_STATE);

    function logout() {
      useLogout();
      router.push("/");
    }

    return { isAuth, logout };
  },
};
</script>
