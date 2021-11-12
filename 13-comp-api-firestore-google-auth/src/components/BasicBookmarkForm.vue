<template>
  <div class="columns">
    <div class="field column">
      <label class="label">Name</label>
      <div class="control">
        <input type="text" class="input" v-model.trim="bookmark.name" />
      </div>
      <p
        class="help is-danger has-text-weight-bold"
        v-show="validateString([bookmark.name])"
      >
        This name is required
      </p>
    </div>
    <div class="field column">
      <label class="label">Folder</label>
      <div class="control">
        <input type="text" class="input" v-model.trim="bookmark.folder" />
      </div>
      <p
        class="help is-danger has-text-weight-bold"
        v-show="validateString([bookmark.folder])"
      >
        This folder is required
      </p>
    </div>
  </div>
  <div class="field">
    <label class="label">Url</label>
    <div class="control">
      <input type="text" class="input" v-model.trim="bookmark.url" />
    </div>
    <p
      class="help is-danger has-text-weight-bold"
      v-show="validateString([bookmark.url])"
    >
      This url is required
    </p>
  </div>
  <div class="field mt-5">
    <div class="control">
      <label class="checkbox">
        <input type="checkbox" v-model="bookmark.favorite" />
        Is favorite
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { validateString } from "@/utils/Validator";

export default defineComponent({
  setup() {
    const bookmark = inject("bookmark");
    return { bookmark, validateString };
  },
});
</script>
