import { HeroModel } from "@/models/hero.model";
import { computed, ref } from "vue";
import { useStore } from "vuex";

export function useHeroesFilters(): Record<string, unknown> {
  const company = ref("");
  const name = ref("");
  const store = useStore();

  const filterCompany = (companyParam: string) => {
    company.value = companyParam;
  };

  const searchCompany = (heroes: HeroModel[], companyParam: string) => {
    return heroes.filter((r) =>
      r.company.toLowerCase().includes(companyParam.toLowerCase())
    );
  };

  const searchHeroes = (heroes: HeroModel[], nameParam: string) => {
    return heroes.filter((r) =>
      r.name.toLowerCase().includes(nameParam.toLowerCase())
    );
  };

  const heroes = computed(() => {
    let heroes = store.getters.HEROES;
    heroes = searchCompany(heroes, company.value);
    heroes = searchHeroes(heroes, name.value);
    return heroes;
  });

  return { searchHeroes, searchCompany, filterCompany, name, heroes };
}
