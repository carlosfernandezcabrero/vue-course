<template>
  <div class="row mb-5">
    <div class="text-center">
      <button class="btn btn-primary" role="button" @click="showModal">
        Create</button
      >&nbsp;
    </div>
  </div>
  <div class="row">
    <StateArea
      :state="'Open'"
      :stateRef="openState"
      @changeStatus="openState = !openState"
      :incidents="incidents.open"
    />
  </div>
  <div class="row">
    <StateArea
      :state="'Blocked'"
      :stateRef="blockedState"
      @changeStatus="blockedState = !blockedState"
      :incidents="incidents.blocked"
    />
  </div>
  <div class="row">
    <StateArea
      :state="'Closed'"
      :stateRef="closedState"
      @changeStatus="closedState = !closedState"
      :incidents="incidents.closed"
    />
  </div>
  <!--<pre>{{ incidents }}</pre>-->
  <div v-show="modalState" id="modal-custom" class="modal-custom pb-5">
    <div class="modal__content">
      <span class="modal__close" @click="showModal">&times;</span>
      <SaveIncident />
    </div>
  </div>
</template>

<style scoped>
.modal-custom {
  overflow: scroll;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
.modal__content {
  background-color: white;
  border-radius: 2px;
  width: 80%;
  margin: auto;
  margin-top: 5rem;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  padding-inline: 5%;
}
.modal__close {
  position: relative;
  float: right;
  top: -20px;
  right: -4%;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
}
</style>

<script>
// @ is an alias to /src
import StateArea from "@/components/StateArea";
import SaveIncident from "@/components/SaveIncident";
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Home",
  components: {
    StateArea,
    SaveIncident,
  },
  setup() {
    const modalState = ref(false);
    const openState = ref(false);
    const blockedState = ref(false);
    const closedState = ref(false);
    const store = useStore();

    store.dispatch("LOAD_INCIDENTS");

    const showModal = () => {
      modalState.value = !modalState.value;
    };

    return {
      showModal,
      modalState,
      openState,
      blockedState,
      closedState,
      incidents: computed(() => store.getters.INCIDENTS_BY_STATE),
    };
  },
};
</script>
