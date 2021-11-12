<template>
  <h2 class="title-section text-center">{{ text }}</h2>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
};
</script>
