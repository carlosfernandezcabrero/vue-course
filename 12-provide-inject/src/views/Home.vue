<template>
  <header class="has-text-centered pt-3 px-5 mb-2">
    <h1 class="is-size-2 border-bottom d-inline px-6">Charts Generator</h1>
  </header>
  <main class="container mt-6 px-5 pb-5" role="main">
    <form-data />
    <table-data />
    <my-chart />
  </main>
</template>

<script lang="ts">
import FormData from "@/components/FormData.vue";
import TableData from "@/components/TableData.vue";
import MyChart from "@/components/Chart.vue";
import { defineComponent, ref, provide } from "vue";

export default defineComponent({
  components: { FormData, TableData, MyChart },
  setup() {
    const data = ref([]);
    const ydata = ref("");
    const xdata = ref("");
    const nChart = ref("");

    provide("data", data);
    provide("ydata", ydata);
    provide("xdata", xdata);
    provide("nChart", nChart);

    return {};
  },
});
</script>
