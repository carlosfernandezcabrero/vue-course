<template>
  <div class="card">
    <img :src="product.url" class="card-img-top" :alt="product.name" />
    <div class="card-body">
      <h5 class="card-title">{{ product.price }}$</h5>
      <p class="card-text">
        {{ product.name }}
      </p>
      <router-link :to="`/products/${product.id}`" class="btn btn-primary"
        >Details</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {},
  },
  setup() {},
};
</script>
