<template>
  <h3>Register</h3>
  <hr />
  <div class="alert alert-danger mb-4" role="alert" v-show="error">
    {{ error }}
  </div>
  <form @submit.prevent="submit">
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="email"
        v-model.trim="user.email"
        aria-describedby="emailHelp"
        :class="{
          'is-invalid': Validator.validateString(user.email) && clicked,
        }"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        autocomplete="off"
        v-model.trim="user.password"
        :class="{
          'is-invalid': Validator.validateString(user.password) && clicked,
        }"
      />
    </div>
    <div class="mb-4">
      <router-link to="/login">&rarr;&nbsp;&nbsp;Return to login</router-link>
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
  <pre>{{ user }}</pre>
</template>
<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import Validator from "@/utils/Validator";
import { useStore } from "vuex";
import { errors } from "@/utils/ErrorMessagesFirebaseTranslation";

export default {
  setup() {
    const user = reactive({});
    let clicked = ref(false);
    const store = useStore();
    const router = useRouter();
    const error = ref("");

    function setForm() {
      Object.assign(user, {
        email: "",
        password: "",
      });
    }

    function submit() {
      if (Validator.validateString(user.email, user.password)) {
        clicked.value = true;
        return;
      }

      store.dispatch("REGISTER_USER", user).then((response) => {
        if (response.error === undefined) {
          setForm();
          clicked.value = false;
          router.push("/login");
        } else {
          error.value =
            errors[response.error.message] || response.error.message;
        }
      });
    }

    setForm();

    return {
      user,
      submit,
      Validator,
      clicked,
      error,
    };
  },
};
</script>
<style scoped></style>
