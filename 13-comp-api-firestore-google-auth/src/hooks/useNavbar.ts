import { ref, Ref } from "vue";

export function useNavbar(): Record<string, unknown> {
  const stateBurguerMenu: Ref<string | null> = ref(null);
  const stateBurguerMenuSimple: Ref<boolean | null> = ref(null);

  const toogleMenu = () => {
    const styleDisplayed = "inherit";
    const display = "display";

    if (stateBurguerMenuSimple.value === null) {
      stateBurguerMenu.value = `${display}: ${styleDisplayed}`;
      stateBurguerMenuSimple.value = true;
    } else {
      if (stateBurguerMenuSimple.value) {
        stateBurguerMenu.value = `${display}: none`;
        stateBurguerMenuSimple.value = false;
      } else {
        stateBurguerMenu.value = `${display}: ${styleDisplayed}`;
        stateBurguerMenuSimple.value = true;
      }
    }
  };

  return { toogleMenu };
}
