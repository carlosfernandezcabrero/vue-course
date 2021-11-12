<template>
  <navbar />
  <div class="container py-5">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  components: { Navbar },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
