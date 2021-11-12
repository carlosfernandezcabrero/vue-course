<template>
  <div class="edit-event">
    <div class="panels">
      <Loading v-show="loadingData" />
    </div>
    <form
      class="create-event__form md-cont n-row mx-auto"
      @submit.prevent="edit"
      v-show="!loadingData"
    >
      <BasicFormInputs :errors="errors" :event="event" />
      <div class="mt-sm group-inputs">
        <input
          type="checkbox"
          name="state"
          id="state"
          v-model="event.value.finished"
        />
        <label for="state">Finished</label>
      </div>

      <div class="submit text-center mt-lg">
        <Button
          type="submit"
          text="Edit"
          class="bg-success"
          v-show="!loadingProcess"
        />
        &nbsp;
        <button class="btn bg-success" v-show="loadingProcess">
          <i class="fas fa-sync fa-spin"></i></button
        >&nbsp;
        <router-link class="btn bg-error" to="/admin">Cancel</router-link>
      </div>
    </form>
    <pre>{{ event }}</pre>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { reactive, ref } from "@vue/reactivity";
import BasicFormInputs from "@/components/BasicFormInputs";
import Loading from "@/components/Loading";
import Button from "@/components/Button";
import { update, findById } from "@/requests/event.requests";

export default {
  components: { Button, BasicFormInputs, Loading },
  setup() {
    const route = useRoute();
    const event = reactive({ value: {} });
    const errors = ref();
    const loadingData = ref(true);
    const loadingProcess = ref(false);

    (async function getEvent() {
      const response = await findById(route.params.id);
      event.value = response;
      const dateParts = response.date.split(" ");
      event.value.date = dateParts[0];
      event.value.time = dateParts[1];
      loadingData.value = false;
    })();

    async function edit() {
      loadingProcess.value = true;
      try {
        await update({
          ...event.value,
          date: `${event.value.date} ${event.value.time}`,
        });
      } catch (err) {
        errors.value = err.response.data;
      }
      loadingProcess.value = false;
    }

    return { event, errors, edit, loadingData, loadingProcess };
  },
};
</script>
