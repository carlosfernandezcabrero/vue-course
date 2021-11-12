<template>
  <Title name="HelloWorld 2" />
  <div class="main container py-5" role="main">
    <Account />
  </div>
</template>

<script>
import Title from "./components/Title.vue";
import Account from "./components/Account.vue";

export default {
  name: "App",
  components: {
    Title,
    Account,
  },
};
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
