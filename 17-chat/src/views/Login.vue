<template>
  <div class="login" v-show="!loading">
    <div class="md-cont n-row">
      <form class="form">
        <h3 class="text-center mt-0">LOGIN</h3>
        <hr class="divider" />

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
        <h2 class="mb-sm">Loading ...</h2>
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

.divider {
  margin-bottom: 1.5rem;
}
</style>

<script lang="ts">
import { googleProvider } from "@/config/firebase";
import { signWithProviderService } from "@/service/authService";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { saveUser, getUser } from "@/service/userService";
import { saveLocalStorage } from "@/service/localStorageService";
import { defineComponent, ref } from "vue";
import { UserModel } from "@/models/user.model";
import { USER_COOKIE_NAME } from "@/config/globalVariables";

export default defineComponent({
  inheritAttrs: false,
  setup() {
    const router = useRouter();
    const store = useStore();
    const loading = ref(false);

    const signWithProvider = (provider: string) => {
      loading.value = true;
      switch (provider) {
        case "goo":
          signWithProviderService(googleProvider).then((result) => {
            if (result) {
              getUser(result.uid).then((userDB) => {
                if (!userDB) {
                  saveUser(result as UserModel);
                }
                if (userDB) {
                  result = userDB;
                }

                saveLocalStorage(USER_COOKIE_NAME, result?.uid as string);
                store.dispatch("setCurrentUser", result);
                router.push("/chat");
              });
            }
          });
          break;
        default:
          break;
      }
    };

    return { signWithProvider, loading };
  },
});
</script>
