<template>
  <div class="home text-center container--med">
    <div class="row-custom">
      <img alt="Vue logo" src="../assets/logo.png" />
      <h1>Welcome to the application</h1>
      <h3>Articles in the application &rarr; {{ nPosts }}</h3>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Service from "@/services/RestResource.js";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      nPosts: 0,
    };
  },
  created() {
    new Service().getData().then((r) => (this.nPosts = r.length));
  },
};
</script>
