<template>
  <div class="event">
    <p class="event__text">
      {{ event.name }}
    </p>
    <h6 class="event__date text-center">
      {{ new Date(event.date).toLocaleString("es-ES") }}
    </h6>
    <div class="event__actions text-right">
      <button class="btn btn-sm bg-success">
        <router-link :to="`/edit-event/${event.id}`">
          <i class="fas fa-edit fa-1x"></i>
        </router-link></button
      >&nbsp;
      <ButtonDelete class="bg-error" @click="del(event.id)" />
    </div>
  </div>
</template>

<script>
import ButtonDelete from "@/components/ButtonDelete";

export default {
  components: { ButtonDelete },
  props: {
    event: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    async function del(id) {
      emit("deleteById", id);
    }

    return { del };
  },
};
</script>

<style scoped>
.event {
  padding: 0.5rem 1rem;
  background-color: white;
  margin-bottom: 0.75rem;
  border: solid 1px lightgrey;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.event:hover {
  background-color: whitesmoke;
  cursor: pointer;
}

.event__text {
  flex-grow: 1;
}

.event__date {
  color: gray;
  width: 25%;
}

.event__actions {
  width: 25%;
}
</style>
