<template>
  <div class="columns">
    <div class="column is-full buttons has-text-centered">
      <router-link
        to="/bookmark/new"
        class="button is-link has-text-weight-bold"
        >Create</router-link
      >
    </div>
  </div>
  <!--<pre>Data: {{ data }}</pre>-->
  <div class="mt-6">
    <table class="table is-fullwidth is-bordered is-striped is-hoverable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Url</th>
          <th>Folder</th>
          <th>Favorite</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in bookmarks" :key="i.id">
          <td>{{ i.name }}</td>
          <td>{{ i.url }}</td>
          <td>{{ i.folder }}</td>
          <td>
            <span v-if="i.favorite" class="tag is-success has-text-weight-bold">
              Yes
            </span>
            <span v-else class="tag is-danger has-text-weight-bold">No</span>
          </td>
          <td>
            <router-link
              class="button is-info is-small"
              :to="`/bookmark/${i.id}`"
              >Edit</router-link
            >
            &nbsp;
            <button class="button is-danger is-small" @click="deleteItem(i.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref } from "vue";
import { getAll } from "@/hooks/useDB";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const data: Ref<unknown> = ref([]);
    const store = useStore();

    async function loadData() {
      data.value = await getAll();
      store.dispatch("SET_INITIAL_BOOKMARKS", data.value);
    }

    function deleteItem(id: string) {
      store.dispatch("DELETE_BOOKMARK", id);
    }

    loadData();

    return {
      bookmarks: computed(() => store.getters.GET_BOOKMARKS),
      deleteItem,
    };
  },
});
</script>
