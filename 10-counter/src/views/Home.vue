<template>
  <div class="home">
    <Form />
    <div class="conuter text-center">
      <h1 class="fw-bold counter__title mb-4">{{ config.title }}</h1>
      <h1 class="fw-bold counter__number mb-5">
        <span :class="cont >= 0 ? 'text-success' : 'text-danger'">
          {{ cont }}&nbsp;{{ config.unit }}
        </span>
      </h1>
      <Button text="Increase" @action="increase" />&nbsp;
      <Button text="Reset" @action="reset" />&nbsp;
      <Button text="Decrease" @action="decrease" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Button from "@/components/Button.vue";
import Form from "@/components/Form.vue";
import { useCounter } from "@/hooks/useCounter";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  components: { Button, Form },
  setup() {
    const store = useStore();

    return {
      config: computed(() => {
        const config = store.getters.CONFIG;
        if (Object.keys(config).length === 0) {
          return { title: "Not defined", unit: "" };
        }
        return config;
      }),
      ...useCounter(),
    };
  },
});
</script>

<style scoped>
.home {
  height: 100vh;
  background-color: hsl(210, 36%, 96%);
}
.counter__title {
  padding-top: 5rem;
}
.counter__number {
  font-size: 5rem;
}
.counter__title {
  font-size: 3rem;
}
</style>
