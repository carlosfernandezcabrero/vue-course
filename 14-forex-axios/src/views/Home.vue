<template>
  <div class="home md-cont">
    <h1 class="text-center">Choose date:</h1>
    <div class="datepicker text-center">
      <input
        type="date"
        name="date"
        id="date"
        class="datepicker__input"
        v-model="date"
        :max="today"
      />
    </div>
    <div class="results text-center animate__animated animate__backInDown">
      <h1 v-show="!loading" class="result">{{ dolar }}</h1>
      <h1 v-show="loading" class="result">
        <i class="fas fa-spinner fa-2x fa-spin"></i>
      </h1>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding-top: 4rem;
}

.datepicker__input {
  font-size: 1.2rem;
  padding-block: 0.5rem;
  padding-inline: 1rem;
}

.result {
  background-color: #38a3a5;
  color: white;
  margin-top: 2rem;
  padding-block: 1rem;
  padding-inline: 3rem;
  border-radius: 4px;
  display: inline-block;
}
</style>

<script>
import { ref, watchEffect } from "vue";
import axios from "axios";

export default {
  name: "Home",
  components: {},
  setup() {
    const today = new Date().toISOString().substr(0, 10);
    const date = ref(today);
    const dolar = ref();
    const loading = ref(false);

    const transformDate = (date) =>
      `${date.substr(8, 2)}-${date.substr(5, 2)}-${date.substr(0, 4)}`;

    const getDolarValue = async (date) => {
      loading.value = true;
      return await axios
        .get(`https://mindicador.cl/api/dolar/${transformDate(date)}`)
        .then((data) => {
          dolar.value = data.data.serie[0]?.valor || "Data not found";
          loading.value = false;
        })
        .catch((err) => {
          dolar.value = "INTERNAL ERROR";
          loading.value = false;
        });
    };

    watchEffect(() => getDolarValue(date.value));

    return { today, date, dolar, loading };
  },
};
</script>
