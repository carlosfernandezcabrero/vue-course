<template>
  <form class="form" @submit.prevent="registerUser">
    <p class="has-text-centered is-size-3">Create Account</p>
    <hr class="has-background-dark divider" />
    <div v-show="errorMessage.length > 0" class="alert danger">
      {{ errorMessage }}
    </div>
    <div v-show="registered" class="alert success">
      The account has been created successfully
    </div>
    <BasicUserForm />
    <div class="field has-text-centered mt-6">
      <div class="control">
        <button class="button is-info">Register</button>
      </div>
    </div>
  </form>
</template>

<script>
import { defineComponent, provide, reactive, ref } from "vue";
import { useUser } from "@/hooks/useUser";
import BasicUserForm from "@/components/BasicUserForm.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { BasicUserForm },
  setup() {
    const user = reactive({
      email: "",
      password: "",
    });
    const errorMessage = ref("");
    const registered = ref(false);
    const router = useRouter();

    function registerUser() {
      const { register: registerF } = { ...useUser() };

      registerF({ ...user }).then((data) => {
        if (data.message) {
          errorMessage.value = data.message;
          registered.value = false;
          return;
        }
        registered.value = true;
        Object.assign(user, {
          email: "",
          password: "",
        });
        router.push("/");
      });
    }

    provide("user", user);

    return { registerUser, errorMessage, registered };
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
</style>
