<template>
  <div>
    <Navbar />
    <router-view id="content" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: { Navbar },
};
</script>

<style>
@import url("./assets/vendor/css-library/basic.css");
@import url("./assets/vendor/css-library/components.css");
@import url("./assets/vendor/css-library/alignment.css");
@import url("./assets/vendor/css-library/spacing.css");

@import url("https://fonts.googleapis.com/css2?family=Playball&display=swap");

:root {
  --color-primary: #023047;
  --color-secondary: #219ebc;
  --color-tertiary: #ee6c4d;

  --color-success: #198754;
  --color-error: #dc3545;
}

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#content {
  flex: 1;
}

body {
  background-color: #f8f9fa;
  color: #023047;
}

.title-section {
  font-family: "Playball", cursive;
  margin-bottom: 1.5rem;
}

.bg-success {
  background-color: var(--color-success);
  color: white;
}

.btn.bg-success:hover {
  background-color: #157347;
}

.btn-success-outline {
  outline: solid 2px var(--color-success);
  background-color: white;
  color: var(--color-success);
}

.btn-success-outline:hover {
  background-color: var(--color-success);
  color: white;
}

.bg-error {
  background-color: var(--color-error);
  color: white;
}

.btn.bg-error:hover {
  background-color: #bb2d3b;
}

.btn-error-outline {
  outline: solid 2px var(--color-error);
  background-color: white;
  color: var(--color-error);
}

.btn-error-outline:hover {
  background-color: var(--color-error);
  color: white;
}

.bg-light {
  background-color: grey;
  color: white;
}

.bg-blue {
  background-color: #0d6efd;
  color: white;
}

.btn.bg-blue:hover {
  background-color: #0b5ed7;
}

.color-blue {
  color: #0d6efd;
}
</style>
