<template>
  <div class="columns">
    <div class="field column is-four-fifths">
      <label class="label is-medium">Name of chart</label>
      <div class="control">
        <input class="input" type="text" v-model.trim="nChart" />
      </div>
    </div>
  </div>
  <div class="columns mb-6 is-align-items-end">
    <div class="column is-two-fifths">
      <label class="label is-medium">Y data</label>
      <div class="control">
        <input class="input" type="text" v-model.number="ydata" />
      </div>
    </div>
    <div class="column is-two-fifths">
      <label class="label is-medium">X data</label>
      <div class="control">
        <input class="input" type="text" v-model.trim="xdata" />
      </div>
    </div>
    <div class="column">
      <div class="control has-text-centered">
        <button class="button is-link" @click="addData">Add</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from "vue";

export default defineComponent({
  setup() {
    const ydata: Ref<string> | null = inject("ydata") || null;
    const xdata: Ref<string> | null = inject("xdata") || null;
    const nChart: Ref<string> | null = inject("nChart") || null;

    const data: Ref<Record<symbol, string>[]> | null = inject("data") || null;

    function addData() {
      data?.value.push({ y: ydata?.value, x: xdata?.value });
      if (ydata) ydata.value = "";
      if (xdata) xdata.value = "";
    }

    return { addData, ydata, xdata, nChart };
  },
});
</script>
