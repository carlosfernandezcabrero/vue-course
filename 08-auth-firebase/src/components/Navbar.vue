<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="@/assets/images/logo.png"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        Custom Remedy
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto text-center">
          <li class="nav-item">
            <router-link v-show="isAuthenticated" class="nav-link" :to="'/'"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              v-show="isAuthenticated"
              class="nav-link"
              :to="'/about'"
              >About</router-link
            >
          </li>
        </ul>
        <button
          class="btn btn-success"
          role="button"
          type="button"
          v-show="!isAuthenticated"
          @click="login"
        >
          Login
        </button>
        <button
          class="btn btn-danger"
          role="button"
          type="button"
          v-show="isAuthenticated"
          @click="logout"
        >
          Log out
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link.router-link-active,
.nav-link.router-link-active:focus {
  color: #f1faee;
  font-weight: bold;
  text-decoration: #f1faee underline;
}
</style>

<script>
import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import AuthService from "@/services/AuthService";

export default {
  name: "Navbar",
  setup() {
    const router = useRouter();

    function logout() {
      AuthService.removeToken();
      router.push("/login");
    }

    function login() {
      router.push("/login");
    }

    let isAuthenticated = computed(() =>
      AuthService.isAuthenticated(AuthService.state)
    );

    return {
      isAuthenticated,
      logout,
      login,
    };
  },
};
</script>
