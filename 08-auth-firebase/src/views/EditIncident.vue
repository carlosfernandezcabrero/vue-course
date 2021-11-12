<template>
  <SaveIncident :id="id" />
</template>

<script>
import SaveIncident from "@/components/SaveIncident";
import { useRoute } from "vue-router";

export default {
  components: {
    SaveIncident,
  },
  setup() {
    const id = useRoute().params.id;

    return { id };
  },
};
</script>

<style></style>
