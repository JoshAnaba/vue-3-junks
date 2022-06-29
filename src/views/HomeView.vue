<script>
import { ref } from "vue";

export default {
  name: "HomeView",
  setup() {
    const p = ref(null);
    let name = "Josh";
    const handleClick = () => {
      console.log(p, p.value);
      p.value.classList.add("class");
      p.value.innerContent = 'Hello guys'
    };
    return {
      name,
      handleClick,
      p,
    };
  },
};
</script>

<template>
  <main>
    <p ref="p">my name is {{ name }}</p>
    <button @click="handleClick()">Click me</button>
  </main>
</template>
