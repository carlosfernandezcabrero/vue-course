<template>
  <button
    role="button"
    type="button"
    class="btn fw-bold"
    :class="reset ? 'btn-danger' : 'btn-dark'"
    @click="doAction"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: ["text"],
  setup(props, context) {
    const doAction = function () {
      context.emit("action");
    };
    return {
      reset: computed(() => props.text.toLowerCase() === "reset"),
      doAction,
    };
  },
});
</script>
