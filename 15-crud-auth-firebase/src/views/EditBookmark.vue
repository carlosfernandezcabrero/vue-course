<template>
  <div class="columns has-text-centered">
    <h1 class="column is-full is-size-2">Edit Bookmark</h1>
  </div>
  <hr />
  <div class="columns mt-3">
    <form class="column is-full" @submit.prevent="onSubmit">
      <div class="field">
        <label class="label">ID</label>
        <div class="control">
          <input type="text" class="input" disabled :value="bookmark.id" />
        </div>
      </div>
      <basic-bookmark-form />
      <div class="field has-text-centered mt-6">
        <div class="control">
          <button class="button is-link">Edit</button>
        </div>
      </div>
    </form>
  </div>
  <pre>{{ bookmark }}</pre>
</template>

<script>
import { defineComponent, provide, reactive } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { validateString } from "@/utils/Validator";
import BasicBookmarkForm from "@/components/BasicBookmarkForm.vue";

export default defineComponent({
  components: { BasicBookmarkForm },
  setup() {
    let bookmark = reactive({
      name: "",
      url: "",
      folder: "",
      userUid: "",
    });
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    bookmark = store.getters.GET_BY_ID(route.params.id);

    function onSubmit() {
      if (validateString([bookmark.name, bookmark.url, bookmark.folder])) {
        return;
      }
      const user = store.getters.GET_USER;
      bookmark.userUid = user.uid || "";

      store
        .dispatch("ADD_BOOKMARK", { ...bookmark })
        .then(() => router.push("/"));
    }

    provide("bookmark", bookmark);

    return { bookmark, onSubmit, validateString };
  },
});
</script>
