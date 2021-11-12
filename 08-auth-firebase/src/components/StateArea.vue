<template>
  <div class="state-area-header">
    <h4 class="state-area-header__title">
      {{ state }}
    </h4>
    <button
      class="btn btn-primary"
      role="button"
      @click="$emit('changeStatus')"
    >
      Show&nbsp;&nbsp;
      <span class="badge bg-light text-dark">{{ incidents.length }}</span>
    </button>
  </div>
  <div class="divider">
    <hr />
  </div>
  <div class="kanvan mb-5" v-show="stateRef">
    <Incident v-for="i in incidents" :key="i.id" :incident="i" />
  </div>
</template>

<script>
import Incident from "@/components/Incident";

export default {
  name: "StateArea",
  inheritAttrs: false,
  props: {
    state: {
      type: String,
    },
    stateRef: {
      type: Boolean,
    },
    incidents: {
      type: Array,
    },
  },
  components: {
    Incident,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.state-area-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.state-area-header__title,
.state-area-header__title > .badge {
  margin-bottom: 0;
}
.kanvan {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(16rem, 100%), 1fr));
  grid-gap: 1rem;
}
</style>
