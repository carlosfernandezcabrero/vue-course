<template>
  <div class="row">
    <div class="header mb-2">
      <h1>
        Heroes&nbsp;
        <span>
          <button class="btn btn-secondary" @click="filterCompany('')">
            All</button
          >&nbsp;
          <button class="btn btn-danger" @click="filterCompany('marvel')">
            Marvel</button
          >&nbsp;
          <button class="btn btn-primary" @click="filterCompany('dc')">
            DC
          </button>
        </span>
      </h1>
      <span>
        <input type="text" class="form-control search-box" v-model="name" />
      </span>
    </div>
    <hr />
  </div>
  <div class="row">
    <div class="cards">
      <hero-card v-for="(hero, index) in heroes" :key="index" :hero="hero" />
    </div>
  </div>
</template>

<script lang="ts">
// Components
import HeroCard from "@/components/HeroCard.vue";

// Hooks
import { useHeroesFilters } from "@/hooks/useHeroesFilters";

import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: { HeroCard },
  setup() {
    const store = useStore();
    store.dispatch("LOAD_HEROES");

    return { ...useHeroesFilters() };
  },
});
</script>

<style scoped>
.cards {
  column-width: 18rem;
  gap: 1rem;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.header h1 {
  margin-bottom: 0;
}
</style>
