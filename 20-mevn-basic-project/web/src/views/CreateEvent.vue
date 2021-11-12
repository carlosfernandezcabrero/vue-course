<template>
  <div class="create-event">
    <form
      class="create-event__form md-cont n-row mx-auto"
      @submit.prevent="create"
    >
      <BasicFormInputs :errors="errors" :event="event" />
      <div class="submit text-center mt-lg">
        <Button
          type="submit"
          text="Create"
          class="bg-success"
          v-show="!loading"
        />&nbsp;
        <button class="btn bg-success" v-show="loading">
          <i class="fas fa-sync fa-spin"></i></button
        >&nbsp;
        <router-link class="btn bg-error" to="/admin">Cancel</router-link>
      </div>
    </form>
    <pre>{{ event }}</pre>
  </div>
</template>

<style scoped>
.create-event__form {
  width: 80%;
}

@media only screen and (max-width: 768px) {
  .create-event__form {
    width: 90%;
  }
}

@media only screen and (max-width: 600px) {
  .create-event__form {
    width: 100%;
  }
}
</style>

<script>
import Button from "@/components/Button";
import BasicFormInputs from "@/components/BasicFormInputs";
import { reactive, ref } from "@vue/reactivity";
import { save } from "@/requests/event.requests";
import { getUser } from "@/shared/auth.service";

export default {
  components: { Button, BasicFormInputs },
  setup() {
    const eventModel = {
      name: "",
      people: 0,
      description: "",
      time: "",
      date: "",
    };
    const event = reactive({ value: { ...eventModel } });
    const errors = ref();
    const loading = ref(false);

    async function create() {
      loading.value = true;
      try {
        await save({
          ...event.value,
          userId: getUser(),
          date: `${event.value.date} ${event.value.time}`,
        });
      } catch (err) {
        if (err.response.data) {
          errors.value = err.response.data;
        }
      }
      loading.value = false;
    }

    return { event, create, errors, loading };
  },
};
</script>
