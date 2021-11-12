<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: { Navbar },
};
</script>

<style>
@import "./assets/styles.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
