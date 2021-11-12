<template>
  <div class="admin">
    <div class="panels">
      <Loading v-show="loading" />

      <div v-show="stateError" class="md-cont n-row">
        <div class="panel panel-error text-center">
          {{ exception.value }}
        </div>
      </div>

      <div class="md-cont n-row" v-show="deleting">
        <div class="panel panel-info">
          <h4 class="text-center mb-sm">Deleting event</h4>
          <p class="text-center"><i class="fas fa-sync fa-spin fa-2x"></i></p>
        </div>
      </div>
    </div>
    <div v-show="!loading && !stateError" class="view n-row md-cont">
      <div
        class="panel panel-success mb-sm animate__animated animate__fadeInLeft"
        v-show="eventRemoved"
      >
        The event has been deleted
      </div>
      <div
        class="panel panel-error mb-sm animate__animated animate__fadeInLeft"
        v-show="errorWhenRemovedEvent"
      >
        {{ exception.value }}
      </div>

      <div class="tools">
        <div class="actions">
          <router-link to="/create-event" class="btn bg-blue">
            Create
          </router-link>
          <h4>Total elements: {{ numElements }}</h4>
        </div>
        <div class="pagination">
          <i
            class="fas fa-caret-square-left pagination__action color-blue"
            @click="backPage"
          ></i>
          &nbsp;{{ currentPage + 1 }}&nbsp;
          <i
            class="fas fa-caret-square-right pagination__action color-blue"
            @click="nextPage"
          ></i>
        </div>
      </div>
      <hr class="divider" />

      <div v-show="!stateError" class="events-collection">
        <EventAdmin
          v-for="i in eventsPagination"
          :key="i.id"
          :event="i"
          @deleteById="del(i.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import EventAdmin from "@/components/EventAdmin";
import Loading from "@/components/Loading";
import { getException } from "@/shared/exception.handler.js";
import { findByUserId } from "@/requests/event.requests";
import { deleteById } from "@/requests/event.requests";
import { useStore } from "vuex";

export default {
  components: { EventAdmin, Loading },
  setup() {
    const events = ref();
    const eventsPagination = ref();
    const store = useStore();
    const exception = reactive({
      value: "",
    });
    const stateError = ref(false);
    const loading = ref(false);
    const numElements = ref(0);
    const eventRemoved = ref(false);
    const errorWhenRemovedEvent = ref(false);
    const user = store.getters.GET_USER;
    const deleting = ref(false);
    const currentPage = ref(0);
    const skip = 10;

    (async () => {
      loading.value = true;
      try {
        const response = await findByUserId(user);
        numElements.value = 0;
        if (response) {
          events.value = response;
          eventsPagination.value = response.slice(0, skip);
          numElements.value = response.length;
        }
      } catch (error) {
        console.log(error);
        exception.value = getException(error);
        stateError.value = true;
      }
      loading.value = false;
    })();

    const calculateSet = (page) => {
      const start = skip * page;
      const set = events.value.slice(start, start + skip);
      if (set.length > 0) {
        eventsPagination.value = set;
        return true;
      }
      return false;
    };

    const nextPage = () => {
      const page = currentPage.value + 1;
      if (calculateSet(page)) currentPage.value = page;
    };

    const backPage = () => {
      const page = currentPage.value - 1;
      if (calculateSet(page)) currentPage.value = page;
    };

    async function del(id) {
      deleting.value = true;

      const response = await deleteById(id);
      if (!response.data) {
        errorWhenRemovedEvent.value = true;
        exception.value = response.data.message;
      }
      if (response.data) {
        events.value = events.value.filter((event) => event.id !== id);
        calculateSet(currentPage.value);
        numElements.value -= 1;
        eventRemoved.value = true;
      }

      deleting.value = false;
      setTimeout(() => {
        eventRemoved.value = false;
        errorWhenRemovedEvent.value = false;
      }, 4.5 * 1000);
    }

    return {
      eventsPagination,
      exception,
      stateError,
      loading,
      numElements,
      del,
      eventRemoved,
      errorWhenRemovedEvent,
      deleting,
      currentPage,
      nextPage,
      backPage,
    };
  },
};
</script>

<style scoped>
.tools {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.pagination {
  font-size: 1.5rem;
}

.pagination__action {
  cursor: pointer;
}
</style>
