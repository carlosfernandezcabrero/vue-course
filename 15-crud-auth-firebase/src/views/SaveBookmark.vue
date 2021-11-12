<template>
  <div class="columns has-text-centered">
    <h1 class="column is-full is-size-2">New Bookmark</h1>
  </div>
  <hr />
  <div class="columns mt-3">
    <form class="column is-full" @submit.prevent="onSubmit">
      <basic-bookmark-form />
      <div class="field has-text-centered mt-6">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
      </div>
    </form>
  </div>
  <pre>{{ bookmark }}</pre>
</template>

<script>
import { defineComponent, provide, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { validateString } from "@/utils/Validator";
import BasicBookmarkForm from "@/components/BasicBookmarkForm.vue";

export default defineComponent({
  components: { BasicBookmarkForm },
  setup() {
    const bookmark = reactive({});
    const store = useStore();
    const router = useRouter();

    function setForm() {
      Object.assign(bookmark, {
        id: "",
        name: "",
        url: "",
        folder: "",
        favorite: false,
        userUid: "",
      });
    }

    setForm();

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
