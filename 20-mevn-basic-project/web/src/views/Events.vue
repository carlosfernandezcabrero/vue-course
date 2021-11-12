<template>
  <div class="events">
    <div class="panels">
      <Loading v-show="loading" />

      <div class="md-cont n-row" v-show="stateError">
        <div class="panel panel-error text-center">
          {{ exception.value }}
        </div>
      </div>

      <div class="md-cont n-row" v-show="noData">
        <div class="panel panel-info text-center">Not found data</div>
      </div>
    </div>

    <div v-show="!stateError" class="events-collection md-cont n-row">
      <Event v-for="i in events" :key="i._id" :event="i" />
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import Event from "@/components/Event";
import Loading from "@/components/Loading";
import { getException } from "@/shared/exception.handler.js";
import { findAll } from "@/requests/event.requests";

export default {
  components: { Event, Loading },
  inheritAttrs: false,
  setup() {
    const events = ref([]);
    const exception = reactive({
      value: "",
    });
    const stateError = ref(false);
    const loading = ref(false);
    const noData = ref(false);

    (async () => {
      loading.value = true;
      try {
        const data = await findAll();
        if (data) {
          events.value = data;
        }
        if (!data) {
          noData.value = true;
        }
      } catch (error) {
        console.log(error);
        exception.value = getException(error);
        stateError.value = true;
      }
      loading.value = false;
    })();

    return { events, exception, stateError, loading, noData };
  },
};
</script>

<style scoped>
.events-collection {
  column-width: 18rem;
}
</style>
