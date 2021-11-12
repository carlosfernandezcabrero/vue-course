<template>
  <navbar />
  <div class="container py-6 px-3">
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  components: { Navbar },
});
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
@import url("assets/css/main.css");

body {
  font-size: 1rem !important;
  line-height: 1.5 !important;
  font-weight: 400 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
