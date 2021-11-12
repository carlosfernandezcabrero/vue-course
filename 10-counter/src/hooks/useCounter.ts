import { ref } from "vue";

export function useCounter(): Record<string, unknown> {
  const cont = ref(0);

  const increase = function () {
    cont.value += 1;
  };

  const decrease = function () {
    cont.value -= 1;
  };

  const reset = function () {
    cont.value = 0;
  };

  return { cont, increase, decrease, reset };
}
