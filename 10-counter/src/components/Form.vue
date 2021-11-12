<template>
  <div class="pt-4 ps-4">
    <div>
      <h5>
        Title&nbsp;:&nbsp;&nbsp;
        <input type="text" v-model="title" />
      </h5>
    </div>
    <div class="mb-4">
      <h5>
        Unit&nbsp;:&nbsp;&nbsp;
        <input type="text" v-model="unit" />
      </h5>
    </div>
    <div>
      <button class="btn btn-primary fw-bold" @click="setup">Setup</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: ["text"],
  setup() {
    const title = ref("");
    const unit = ref("");
    const store = useStore();

    function setup() {
      store.dispatch("SET_CONFIG", { title: title.value, unit: unit.value });
    }

    return { title, unit, setup };
  },
});
</script>
