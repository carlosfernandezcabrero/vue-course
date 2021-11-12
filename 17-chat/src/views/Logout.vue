<template>
  <div class="logout md-cont n-row">
    <div class="n-row card text-center">
      <h1 class="text-center mb-sm">Goodbye, we hope to see you soon !!!</h1>
      <div class="mb-lg">
        <i class="fas fa-smile fa-5x smile"></i>
      </div>
      <router-link class="btn bg-blue" to="/">Go to login again</router-link>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: whitesmoke;
  padding-inline: 1rem;
}

.smile {
  color: #00adb5;
}
</style>
