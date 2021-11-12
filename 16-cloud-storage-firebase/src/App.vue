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
@import "./assets/vendor/css-library/basic.css";
@import "./assets/vendor/css-library/alignment.css";
@import "./assets/vendor/css-library/components.css";
@import "./assets/vendor/css-library/spacing.css";
@import "./assets/vendor/css-library/images.css";

body {
  background-color: #e8eae6;
}

.bg-blue {
  background-color: #679b9b;
  color: white;
}

.color-blue {
  color: #679b9b;
}

.btn.bg-blue:hover {
  background-color: #7c9473;
}

.bg-error {
  background-color: #ff5151;
  color: white;
}

.bg-primary {
  background-color: #1597e5;
  color: white;
}

.bg-disable {
  background-color: lightgrey;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
