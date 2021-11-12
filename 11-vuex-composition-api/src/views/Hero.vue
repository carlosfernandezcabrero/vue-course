<template>
  <div class="row">
    <div class="header mb-2">
      <h1>Hero details</h1>
      <router-link class="btn btn-primary fw-bold" :to="'/'">
        Return
      </router-link>
    </div>
    <hr />
  </div>
  <div class="row">
    <div class="card mb-3 col-12">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            :src="hero.img"
            class="img-fluid rounded-start"
            :alt="hero.name"
            height="0"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title">
              {{ hero.name }}&nbsp;
              <span class="badge bg-secondary">{{ hero.appearance }}</span>
            </h4>
            <hr />
            <p class="card-text">{{ hero.bio }}</p>
            <div class="card-text">
              <h4 class="btn company-info" :class="colorBadge">
                {{ hero.company }}
              </h4>
            </div>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: ["name"],
  setup(props) {
    const store = useStore();

    const hero = computed(() => store.getters.HERO(props.name));

    const colorBadge = computed(() =>
      hero.value.company === "Marvel" ? "btn-danger" : "btn-primary"
    );

    return { hero, colorBadge };
  },
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header h1 {
  margin-bottom: 0;
}
.company-info.btn {
  cursor: default;
}
</style>
