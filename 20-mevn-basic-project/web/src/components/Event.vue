<template>
  <div class="event">
    <h4 class="event__header">
      {{ event.name }}
    </h4>

    <hr class="divider" />

    <h5 class="event__date text-center mb-xs mt-sm">
      {{ new Date(event.date).toLocaleString("es-ES") }}
    </h5>
    <div class="marks">
      <div class="state">
        <span v-show="!event.finished" class="badge bg-success">Open</span>
        <span v-show="event.finished" class="badge bg-error">Finished</span>
      </div>

      <div class="badge bg-light">{{ event.people }}</div>
    </div>
    <h4 v-show="event.description" class="text-center event__label mt-lg">
      Description
    </h4>
    <p v-show="event.description" class="text-center">
      {{ event.description }}
    </p>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  props: {
    event: {
      type: Object,
    },
  },
  setup() {
    const username = ref();

    return { username };
  },
};
</script>

<style scoped>
.event {
  background-color: white;
  border: solid 1px lightgrey;
  border-radius: 4px;
  margin-bottom: 1rem;
  padding-inline: 1rem;
  padding-block: 1.2rem;
  break-inside: avoid;
  box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
}

.event__header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.event__date,
.event__author {
  color: gray;
  font-size: 0.85em;
}

.event__label {
  color: var(--color-tertiary);
}

.marks {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
</style>
