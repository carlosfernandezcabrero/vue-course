<template>
  <div class="nav md-cont">
    <span class="brand">
      <h4 class="page-name">Cloud Storage</h4>
    </span>
    <span class="links">
      <router-link to="/" class="link">
        <h4 class="link__item">Home</h4>
      </router-link>
      <router-link to="/user-home" class="link">
        <h4 class="link__item">Profile</h4>
      </router-link>
    </span>
    <span class="actions text-right">
      <button
        type="button"
        role="button"
        class="btn sign-out bg-error"
        @click="signOut"
        v-show="userState"
      >
        Sign Out
      </button>
    </span>
  </div>
</template>

<script>
import { signOutService } from "@/app/service/authService";
import { useRouter } from "vue-router";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();

    const userState = computed(() => {
      const result = !!store.getters.getCurrentUser.displayName;
      return result;
    });

    const signOut = () => {
      signOutService().then(() => {
        store.dispatch("setCurrentUser", {});
        router.push("/");
      });
    };

    return { signOut, userState };
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  gap: 1rem;
}
.brand,
.actions {
  width: 25%;
}

.links {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.page-name,
.link {
  padding-inline: 1rem;
  color: #32502E;
}

.link:hover {
  font-weight: bold;
}

.link.router-link-active {
  border-bottom: var(--color-quartary) solid 1.5px;
}

.link__item {
  margin-bottom: 0.2rem;
}
</style>
