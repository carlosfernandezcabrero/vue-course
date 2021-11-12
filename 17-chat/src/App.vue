<template>
  <Navbar />
  <router-view id="view" />
</template>

<style>
@import "./assets/vendor/css-library/basic.css";
@import "./assets/vendor/css-library/images.css";
@import "./assets/vendor/css-library/components.css";
@import "./assets/vendor/css-library/alignment.css";
@import "./assets/vendor/css-library/spacing.css";

body {
  background-color: #eeeeee;
  color: #393e46;
}

.bg-blue {
  background-color: #1597e5;
  color: white;
}

.btn.bg-blue:hover {
  background-color: #1597e5;
}

.bg-error {
  background-color: #ff5151;
  color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";

export default defineComponent({
  components: { Navbar },
});
</script>
