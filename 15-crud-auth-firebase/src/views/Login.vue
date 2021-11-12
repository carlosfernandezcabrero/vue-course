<template>
  <form class="form" @submit.prevent="login">
    <p class="has-text-centered is-size-3">Login</p>
    <hr class="has-background-dark divider" />
    <div v-show="failLogin" class="alert danger">
      {{ errorMessage }}
    </div>
    <BasicUserForm />
    <div class="field has-text-centered mt-6">
      <div class="control">
        <button class="button is-info">Submit</button>
      </div>
    </div>
    <p class="is-size-4 has-text-centered mt-6">Or ...</p>
    <div class="sign-google sign-option mt-5" @click="signInWithGoogle">
      <img
        class="icon mr-3"
        src="@/assets/google-icon.png"
        alt="google_icon"
      />Sign with Google
    </div>
  </form>
</template>

<script>
import { defineComponent, provide, reactive, ref } from "vue";
import { useUser } from "@/hooks/useUser";
import BasicUserForm from "@/components/BasicUserForm.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  components: { BasicUserForm },
  setup() {
    const user = reactive({
      email: "",
      password: "",
    });
    const failLogin = ref(false);
    const errorMessage = ref("");
    const router = useRouter();
    const store = useStore();

    function login() {
      const { signInWithPassword } = { ...useUser() };
      signInWithPassword({ ...user }).then((data) => {
        if (data.message) {
          errorMessage.value = data.message;
          failLogin.value = true;
          return;
        }
        store.dispatch("SET_USER", data);
        failLogin.value = false;
        router.push("/");
      });
    }

    provide("user", user);

    return { login, failLogin, errorMessage, ...useUser() };
  },
});
</script>

<style scoped>
.form {
  margin: auto;
  background-color: whitesmoke;
  padding-inline: 20px;
  padding-top: 1rem;
  padding-bottom: 3rem;
  border-radius: 4px;
  width: 60%;
}
.sign-option {
  display: flex;
  background-color: white;
  padding-inline: 15px;
  padding-block: 1.5rem;
  justify-content: center;
  color: black;
  font-weight: bold;
  vertical-align: middle;
  border: 1px solid #d1d7dc;
  box-shadow: 0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%);
}
.sign-option:hover {
  cursor: pointer;
  background-color: #f7f9fa;
}
.icon {
  height: 1.5rem;
}
.divider {
  height: 1px;
}

@media (max-width: 768px) {
  .form {
    width: 80%;
  }
}

@media (max-width: 425px) {
  .form {
    width: 100%;
  }
}
</style>
