<template>
  <button
    role="button"
    class="btn btn-primary"
    @click="doAction"
    :disabled="deactive"
  >
    {{ action }} balance
  </button>
</template>

<script>
export default {
  props: ["action", "deactive"],
  data() {
    return {};
  },
  methods: {
    doAction() {
      this.$emit("doAction");
    },
  },
};
</script>
