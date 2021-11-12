<template>
  <p class="fs-1 number-colors">Number Of Colors:&nbsp;
    <span class="fw-bold">{{ numbersColors }}</span>
  </p>
  <div class="home text-center" :style="{ 'background-color': color }">
    <div class="badge bg-dark py-4 px-4">
      <p class="fs-1 mb-5">
        Background Color&nbsp;&nbsp;:&nbsp;&nbsp;<input
          type="text"
          class="text-primary fw-bold ps-2"
          v-model="color"
        />
      </p>
      <p class="fs-2">
        HEX&nbsp;&nbsp;:&nbsp;&nbsp;
        <span class="text-primary fw-bold">{{ hexColor }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.home {
  height: 100vh;
  padding-top: 12rem;
}
.number-colors {
  margin-bottom: 0;
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useStore } from "vuex";

@Options({})
export default class Home extends Vue {
  color = "red";
  store = useStore();

  created(): void {
    this.store.dispatch("loadData");
  }

  get hexColor(): string {
    const hex = this.store.getters.find(this.color);
    if (hex === undefined) {
      return "Not found";
    }
    return hex.hexString;
  }

  get numbersColors(): number {
    return this.store.getters.colors.length;
  }
}
</script>
