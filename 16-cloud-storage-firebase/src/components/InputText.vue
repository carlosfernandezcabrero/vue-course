<template>
  <div class="item">
    <label :for="id">{{ label }}</label>
    <input type="text" :name="id" :id="id" />
  </div>
</template>

<style scoped>
.item {
  margin-bottom: 1.5rem;
}
.item > input {
  width: 100%;
  padding-block: 0.5rem;
  padding-inline: 0.5rem;
}
</style>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    id: {
      type: String,
    },
  },
};
</script>
