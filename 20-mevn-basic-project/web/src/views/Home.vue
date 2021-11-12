<template>
  <div class="home">
    <div class="md-cont n-row header">
      <div class="header__img">
        <h1 class="text-center">¡ Enjoy each second of your life !</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.header {
  color: white;
}

.header__img {
  min-height: 600px;
  background-image: url("../assets/img/event.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 4rem;
}
</style>
