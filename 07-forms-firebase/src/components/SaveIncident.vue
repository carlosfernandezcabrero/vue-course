<template>
  <form @submit.prevent="proccessForm">
    <div class="form-header text-center">
      <h3>Incident {{ incident.id }}</h3>
    </div>
    <hr class="w-100" />
    <div class="row mb-3">
      <div class="col-12 col-sm-6">
        <label for="shortDesc" class="form-label">
          Short description&nbsp;<span class="required-symbol">*</span>
        </label>
        <input
          type="text"
          class="form-control"
          id="shortDesc"
          v-model.trim="incident.shortDesc"
          :class="{
            'is-invalid':
              Validator.validateString(incident.shortDesc) && clicked,
          }"
        />
        <div class="invalid-feedback">The short description is required</div>
      </div>
      <div class="col-12 col-sm-6">
        <label for="severity" class="form-label">
          Severity&nbsp;<span class="required-symbol">*</span>
        </label>
        <select
          class="form-select"
          v-model="incident.severity"
          :class="{
            'is-invalid':
              Validator.validateString(incident.severity) && clicked,
          }"
        >
          <option value="" selected>Open this select menu</option>
          <option value="critical">Critical</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
        </select>
        <div class="invalid-feedback">The severity is required</div>
      </div>
    </div>
    <div class="row mb-3">
      <label for="state" class="form-label">
        State&nbsp;<span class="required-symbol">*</span>
      </label>
      <div
        :class="{
          'is-invalid': Validator.validateString(incident.state) && clicked,
        }"
      >
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="state"
            value="open"
            v-model="incident.state"
            id="open"
          />
          <label class="form-check-label" for="open">Open</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="state"
            value="blocked"
            v-model="incident.state"
            id="blocked"
          />
          <label class="form-check-label" for="blocked">Blocked</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="state"
            value="closed"
            v-model="incident.state"
            id="closed"
          />
          <label class="form-check-label" for="closed">Closed</label>
        </div>
      </div>
      <div class="invalid-feedback">The state is required</div>
    </div>
    <div class="form-header">
      <h4 class="mt-5 mb-3">User data</h4>
    </div>
    <div class="row mb-3">
      <div class="col-12 col-sm-6">
        <label for="userName" class="form-label">
          Name&nbsp;<span class="required-symbol">*</span>
        </label>
        <input
          type="text"
          class="form-control"
          id="userName"
          v-model.trim="incident.user.name"
          :class="{
            'is-invalid':
              Validator.validateString(incident.user.name) && clicked,
          }"
        />
        <div class="invalid-feedback">The user name is required</div>
      </div>
      <div class="col-12 col-sm-6">
        <label for="userCode" class="form-label">
          Code&nbsp;<span class="required-symbol">*</span>
        </label>
        <input
          type="text"
          class="form-control"
          id="userCode"
          v-model.trim="incident.user.code"
          :class="{
            'is-invalid':
              Validator.validateString(incident.user.code) && clicked,
          }"
        />
        <div class="invalid-feedback">The user code is required</div>
      </div>
    </div>

    <div class="text-center mt-5">
      <button class="btn btn-primary">Register</button>
    </div>
  </form>
  <!--<pre>{{ incident }}</pre>-->
</template>

<style scoped>
.required-symbol {
  color: red;
  font-weight: bold;
}
</style>

<script>
import { reactive } from "@vue/reactivity";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Validator from "@/utils/Validator.js";

export default {
  name: "SaveIncident",
  props: {
    id: {
      type: String,
      default: undefined,
    },
  },
  setup(props) {
    const incident = reactive({});
    const store = useStore();
    const router = useRouter();
    let clicked = ref(false);

    function setForm() {
      if (props.id === undefined) {
        Object.assign(incident, {
          id: "",
          shortDesc: "",
          severity: "",
          state: "",
          user: {
            name: "",
            code: "",
          },
        });
      }
      Object.assign(incident, store.getters.INCIDENT(props.id));
    }

    function proccessForm() {
      if (
        Validator.validateString(
          incident.shortDesc,
          incident.severity,
          incident.state,
          incident.user.name,
          incident.user.code
        )
      ) {
        clicked.value = true;
        return;
      }

      store.dispatch("PUSH_INCIDENT", { ...incident });
      if (incident.id.trim()) {
        router.push("/");
      }
      clicked.value = false;
      setForm();
    }

    setForm();

    return {
      incident,
      proccessForm,
      clicked,
      Validator,
    };
  },
};
</script>
