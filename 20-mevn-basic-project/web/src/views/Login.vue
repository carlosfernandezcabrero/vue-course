<template>
  <div class="login md-cont">
    <div class="login__form-wrapper md-cont n-row">
      <form class="login__form md-cont" @submit.prevent="login">
        <div class="panel panel-error mb-sm" v-show="error.value">
          {{ error.value.message }}
        </div>
        <div class="mb-sm">
          <input
            type="text"
            name="email"
            id="email"
            class="w-100"
            placeholder="email"
            v-model.trim="reactiveUser.value.email"
          />
        </div>
        <div class="mb-sm">
          <input
            type="password"
            name="password"
            id="password"
            class="w-100"
            placeholder="password"
            v-model.trim="reactiveUser.value.password"
          />
        </div>
        <div class="buttons text-center mt-lg">
          <button
            type="submit"
            class="btn bg-blue w-100"
            v-show="!loadingProcess"
          >
            Login
          </button>
          <button class="btn bg-blue w-100" v-show="loadingProcess">
            <i class="fas fa-sync fa-spin"></i>
          </button>
        </div>
      </form>
    </div>
    <pre>{{ reactiveUser }}</pre>
  </div>
</template>

<style scoped>
.login__form {
  padding-block: 2rem;
  background-color: white;
  border: solid 1px lightgrey;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
}
</style>

<script>
import { reactive, ref } from "@vue/reactivity";
import { loginRequest } from "@/requests/auth.requests";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const user = { email: "", password: "" };
    const reactiveUser = reactive({ value: user });
    const router = useRouter();
    const store = useStore();
    const error = reactive({ value: false });
    const loadingProcess = ref(false);

    async function login() {
      loadingProcess.value = true;
      try {
        const response = await loginRequest(reactiveUser.value);
        switch (response.user.role) {
          default:
            store.dispatch("LOGIN", response.user.id);
            localStorage.setItem("userId_eventapp", response.user.id);
            localStorage.setItem("token_eventapp", response.token);
            router.push("/admin");
            break;

          case "ADMIN":
            error.value = "The role 'ADMIN' is not allowed at the moment";
            break;
        }
      } catch (err) {
        error.value = err.response.data;
      }
      loadingProcess.value = false;
    }

    return { reactiveUser, login, error, loadingProcess };
  },
};
</script>
