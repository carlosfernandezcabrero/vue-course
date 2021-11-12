<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand ms-3 complex-logo" href="#">
        <img
          src="../assets/img/logo.png"
          alt=""
          width="40"
          height="40"
          class="d-inline-block align-text-top"
        />
        <h4 class="complex-logo__title">{{ name }}</h4>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style scoped>
.complex-logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
}

.complex-logo__title {
  text-decoration: none !important;
  margin-bottom: 0;
}

.container-fluid {
  justify-content: center;
}
</style>
