<template>
  <div class="error md-cont">
    <div class="error-detail w-100 n-row">
      <div class="error-detail__statusCode mb-sm">
        <i class="fas fa-bug fa-8x"></i>
        <h1 class="code">{{ error.statusCode }}</h1>
      </div>
      <h1
        v-if="error.statusCode === 404"
        class="error-detail__text text-center"
      >
        Page Not Found
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'clean',
  props: {
    error: {
      default: {
        statusCode: 0,
      },
      type: Error,
    },
  },
})
</script>

<style scoped>
.error {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.error-detail {
  margin-top: 6rem;
  background-color: white;
  padding-inline: 1rem;
}

.error-detail__statusCode {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
}

.code {
  font-size: 8em;
}
</style>
