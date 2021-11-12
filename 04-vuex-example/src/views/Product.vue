<template>
  <div class="card">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="`/${product.url}`"
          class="img-fluid rounded-start"
          :alt="product.name"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title w-100">
            {{ product.name }}
            <router-link :to="'/'" class="btn btn-primary float--right"
              >Back</router-link
            >
          </h5>
          <p class="card-text">{{ product.shortdesc }}</p>
          <p class="card-text price badge bg-custom">
            Price: {{ product.price }}$
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  setup() {
    const store = useStore();
    return {
      product: computed(() => store.getters.BY_ID(useRoute().params.id)),
    };
  },
};
</script>

<style scoped>
.card-body {
  height: 100%;
}

.badge {
  font-size: medium;
}

.bg-custom {
  background-color: #b5179e;
}
</style>
