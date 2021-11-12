<template>
  <div class="mb-2">
    <!--<pre>{{ data }}</pre>-->
    <table class="table is-fullwidth is-hoverable is-bordered">
      <thead>
        <tr>
          <th>Data</th>
          <th>Y</th>
          <th>X</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(i, index) in data" :key="index">
          <th>{{ index + 1 }}</th>
          <td>{{ i.y }}</td>
          <td>{{ i.x }}</td>
          <td>
            <button class="button is-info is-small" @click="editItem(index)">
              Edit</button
            >&nbsp;
            <button
              class="button is-danger is-small"
              @click="deleteItem(index)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from "vue";

export default defineComponent({
  setup() {
    const ydata: Ref<string> | null = inject("ydata") || null;
    const xdata: Ref<string> | null = inject("xdata") || null;

    const data: Ref<Record<symbol, string>[]> | null = inject("data") || null;

    function deleteItem(idx: number) {
      data?.value.splice(idx, 1);
    }

    function editItem(idx: number) {
      if (data) {
        data.value[idx] = { y: ydata?.value, x: xdata?.value };
      }
    }

    return { data, deleteItem, editItem };
  },
});
</script>
