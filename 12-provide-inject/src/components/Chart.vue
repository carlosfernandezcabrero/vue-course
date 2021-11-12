<template>
  <div class="canvas mt-6">
    <canvas id="chart" height="80"></canvas>
    <div class="has-text-centered mt-6">
      <button class="button is-link" @click="updateChart">Update Chart</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, Ref } from "vue";
import { Chart, registerables } from "chart.js";

export default defineComponent({
  setup() {
    const data: Ref<[]> | null = inject("data") || null;
    const nChart: Ref<string> | null = inject("nChart") || null;
    let myChart: Chart;

    onMounted(() => {
      const canvas: HTMLCanvasElement = document.getElementById(
        "chart"
      ) as HTMLCanvasElement;
      const ctx = canvas.getContext("2d");
      if (ctx !== null) {
        const data = {
          labels: [],
          datasets: [
            {
              label: "",
              data: [],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        };
        Chart.register(...registerables);
        myChart = new Chart(ctx, {
          type: "line",
          data: data,
        });
      }
    });

    function updateChart() {
      myChart.data.datasets.forEach((dataset) => {
        dataset.label = nChart?.value;
        myChart.data.labels = [];
        dataset.data = [];
        data?.value.forEach((element: { y: number; x: number }) => {
          myChart.data.labels?.push(element.x);
          dataset.data.push(element.y);
        });
      });
      myChart.update();
    }

    return { data, updateChart };
  },
});
</script>
