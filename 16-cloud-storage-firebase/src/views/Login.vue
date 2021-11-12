<template>
  <div class="login" v-show="!loading">
    <div class="md-cont n-row">
      <form class="form">
        <h3 class="text-center mt-0">LOGIN</h3>
        <hr class="divider" />
        <InputText
          class="form-block text-center"
          label="Username"
          id="username"
          v-show="false"
        />
        <InputText
          class="form-block text-center"
          label="Password"
          id="password"
          v-show="false"
        />

        <div class="social-networks">
          <button
            role="button"
            type="button"
            class="btn social-networks__social-network google d-flex-center"
            @click="signWithProvider('goo')"
          >
            <i class="fab fa-google icon"></i>&nbsp;&nbsp;&nbsp;Google
          </button>
        </div>

        <div class="buttons text-center" v-show="false">
          <button class="btn button-submit" type="submit" role="button">
            ENTER
          </button>
        </div>
      </form>
    </div>
  </div>
  <div v-show="loading">
    <div class="md-cont n-row">
      <div class="panel panel-info text-center">
        <h2>Loading ...</h2>
        <i class="fas fa-sync fa-3x fa-spin mb-sm"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form {
  background-color: #f5f5f5;
  padding-inline: 1rem;
  padding-block: 2rem;
  color: #364f6b;
}

.social-networks__social-network {
  border-radius: 0;
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
  border: none;
  color: white;
}

.icon {
  font-size: 1.3rem;
}

.google {
  background-color: #db4437;
}

.facebook {
  background-color: #4267b2;
}

.button-submit {
  margin-top: 1.5rem;
}

.divider {
  margin-bottom: 1.5rem;
}
</style>

<script>
import InputText from "@/components/InputText";
import { googleProvider } from "@/config/firebase";
import { signWithProviderService } from "@/app/service/authService";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { saveUser, getUser } from "@/app/service/userService";
import { ref } from "vue";

export default {
  components: { InputText },
  setup() {
    const router = useRouter();
    const store = useStore();
    const loading = ref(false);

    const signWithProvider = (provider) => {
      loading.value = true;
      switch (provider) {
        case "goo":
          signWithProviderService(googleProvider).then((result) => {
            getUser(result.uid).then((userDB) => {
              if (!userDB.exists) {
                saveUser(result);
              }
              if (userDB.exists) {
                result = userDB.data();
              }
              store.dispatch("setCurrentUser", result);
              router.push("user-home");
            });
          });
          break;
        default:
          break;
      }
    };

    return { signWithProvider, loading };
  },
};
</script>
