<template>
  <div class="card incident">
    <div class="card-body">
      <h5 class="card-title mb-3">
        {{ incident.shortDesc.toUpperCase() }}
      </h5>
      <p class="card-text">
        <span v-if="incident.severity === 'critical'" class="badge bg-danger">{{
          incident.severity
        }}</span>
        <span v-if="incident.severity === 'warning'" class="badge bg-warning">{{
          incident.severity
        }}</span>
        <span v-if="incident.severity === 'info'" class="badge bg-info">{{
          incident.severity
        }}</span>
        &nbsp;<span class="badge bg-secondary">{{ incident.id }}</span>
      </p>
      <div class="buttons text-center">
        <router-link
          :to="`/incident/${incident.id}`"
          class="btn btn-primary btn-sm"
          role="button"
        >
          <i class="far fa-edit"></i></router-link
        >&nbsp;
        <button
          class="btn btn-primary btn-sm"
          role="button"
          @click="deleteIncident(incident.id)"
        >
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-title {
  display: flex;
  justify-content: space-between;
}
</style>

<script>
import { useStore } from "vuex";

export default {
  name: "Incident",
  props: {
    incident: {
      type: Object,
    },
  },
  setup() {
    const store = useStore();
    const deleteIncident = (id) => store.dispatch("DELETE_INCIDENT", id);

    return { deleteIncident };
  },
};
</script>
