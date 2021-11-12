<template>
  <div
    class="panel panel-error mb-lg animate__animated animate__fadeInDown"
    v-if="errors && errors.origin !== 'validation'"
  >
    {{ errors.message }}
  </div>
  <div class="mb-sm">
    <label for="name">Name</label>
    <input
      class="w-100"
      type="text"
      name="name"
      id="name"
      v-model.trim="eventLocal.value.name"
    />
    <div
      class="alert-form mt-xs animate__animated animate__fadeInDown"
      v-if="errors && errors.message.name"
    >
      {{ errors.message.name.message }}
    </div>
  </div>
  <div class="mb-sm">
    <label for="description">Description</label>
    <textarea
      class="w-100"
      name="description"
      id="description"
      cols="30"
      rows="10"
      v-model.trim="eventLocal.value.description"
    ></textarea>
  </div>
  <div class="mb-sm">
    <label for="people">People</label>
    <input
      class="w-100"
      type="number"
      name="people"
      id="people"
      v-model.number="eventLocal.value.people"
    />
    <div
      class="alert-form mt-xs animate__animated animate__fadeInDown"
      v-if="errors && errors.message.people"
    >
      {{ errors.message.people.message }}
    </div>
  </div>
  <div>
    <label for="date">Date</label>
    <div class="date group-inputs w-100">
      <input
        class="w-100"
        type="date"
        name="date"
        id="date"
        v-model.trim="eventLocal.value.date"
      />
      <input
        class="w-100"
        type="time"
        name="time"
        id="time"
        v-model.trim="eventLocal.value.time"
      />
    </div>
    <div
      class="alert-form mt-xs animate__animated animate__fadeInDown"
      v-if="errors && errors.message.date"
    >
      {{ errors.message.date.message }}
    </div>
  </div>
</template>

<script>
import { toRef } from "vue";

export default {
  props: {
    errors: {
      type: Object,
    },
    event: {
      type: Object,
    },
  },
  setup(props) {
    const eventLocal = toRef(props, "event");

    return { eventLocal };
  },
};
</script>
