<template>
  <router-link role="button" class="btn" type="button" :to="path">{{
    text
  }}</router-link>
</template>

<script>
export default {
  props: {
    text: String,
    path: String,
  },
};
</script>
