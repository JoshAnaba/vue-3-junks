import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "index",
  state: () => ({
    counter: 0,
    name: "Anaba Josh Chi",
    fruitsArray: []
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
