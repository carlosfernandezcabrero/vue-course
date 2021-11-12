<template>
  <div class="row">
    <form @submit.prevent="proccess">
      <div class="mb-3 row">
        <div class="col-12 col-sm-6">
          <label for="name" class="col-form-label"
            >Name <span class="required-symbol">*</span></label
          >
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter name"
            v-model.trim="task.name"
            :class="{ 'is-invalid': stateTaskName }"
          />
          <div id="validationTaskName" class="invalid-feedback">
            The name is required
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <label for="time" class="col-form-label">Weekly usage time</label>
          <input
            type="number"
            class="form-control"
            id="time"
            v-model.number="task.time"
          />
        </div>
      </div>
      <div class="mb-3">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="nodejs"
            v-model="task.technology"
            value="nodejs"
          />
          <label class="form-check-label" for="nodejs">Node.js</label>
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="react"
            v-model="task.technology"
            value="react"
          />
          <label class="form-check-label" for="react">React</label>
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="vue"
            v-model="task.technology"
            value="vue"
          />
          <label class="form-check-label" for="vue">Vue</label>
        </div>
      </div>
      <div class="mb-3">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="vscode"
            value="VS Code"
            v-model="task.editor"
          />
          <label class="form-check-label" for="vscode">VS Code</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="webstorm"
            value="Webstorm"
            v-model="task.editor"
          />
          <label class="form-check-label" for="webstorm">Webstorm</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="sublime"
            value="Sublime Text"
            v-model="task.editor"
          />
          <label class="form-check-label" for="sublime">Sublime Text</label>
        </div>
      </div>

      <div class="text-center mt-4">
        <button type="submit" class="btn btn-primary" :disabled="stateForm">
          Send
        </button>
      </div>
    </form>
  </div>
  <div class="row mt-4">
    <h3>Data</h3>
    <hr />
    <pre>{{ task }}</pre>
  </div>
</template>

<script>
import { computed, reactive, ref } from "vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  setup() {
    const task = reactive({});
    const clicked = ref(false);

    const setForm = () => {
      Object.assign(task, {
        name: "",
        technology: [],
        editor: "",
        time: 0,
      });
    };

    const proccess = () => {
      setForm();
      clicked.value = false;
    };

    const preproccess = computed(() => task.name.trim().length === 0);

    setForm();

    return {
      task,
      proccess,
      stateTaskName: computed(
        () => task.name.trim().length === 0 && clicked.value
      ),
      stateForm: computed(() => preproccess.value),
    };
  },
};
</script>

<style scoped>
.required-symbol {
  color: red;
  font-weight: bold;
}
</style>
