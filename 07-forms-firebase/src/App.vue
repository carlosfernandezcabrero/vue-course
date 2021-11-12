<script>
import Navbar from "@/components/Navbar";
import { useStore } from "vuex";

export default {
  components: { Navbar },
  setup() {
    const store = useStore();
    store.dispatch("LOAD_INCIDENTS");
  },
};
</script>

<template>
  <Navbar />
  <div class="container my-5" role="main">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
