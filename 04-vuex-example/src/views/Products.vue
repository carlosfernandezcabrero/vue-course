<template>
  <div class="row">
    <h3>
      Products
      <input
        type="text"
        class="container-custom__input float--right"
        placeholder="Search ..."
        v-model="sText"
      />
    </h3>
    <hr />
    <div class="gallery">
      <Product :product="i" v-for="i in products" :key="i.id" />
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product";
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
  components: {
    Product,
  },
  setup() {
    const store = useStore();
    store.dispatch("GET_PRODUCTS");

    const sText = ref("");

    return {
      products: computed(() => store.getters.BY_NAME(sText.value)),
      sText,
    };
  },
};
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 18rem), 1fr));
  gap: 1rem;
}

.container-custom__input {
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding-block: 15px;
  padding-inline: 0.75rem;
  font-size: medium;
  height: 0;
}
</style>
