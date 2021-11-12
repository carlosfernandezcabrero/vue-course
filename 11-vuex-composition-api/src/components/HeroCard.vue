<template>
  <div class="card">
    <img :src="hero.img" class="card-img-top" :alt="hero.name" />
    <div class="card-body mt-2 text-center">
      <h5 class="card-title">{{ hero.name }}</h5>
      <p class="card-text">{{ hero.bio }}</p>
      <router-link class="btn btn-primary" :to="`/${hero.name}`">
        Details
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["hero"],
});
</script>

<style scoped>
.card img {
  height: 200px;
  width: 100%;
}
.card {
  margin-bottom: 1rem;
  break-inside: avoid;
}
</style>
