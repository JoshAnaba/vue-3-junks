<script>
import { constants } from "buffer";
import { ref } from "vue";

export default {
  name: "HomeView",
  setup() {
    const name = ref('Josh');
    const handleClick = () => {
      name.value = 'Yo'
    };
    return {
      name,
      handleClick
    };
  },
};
</script>

<template>
  <main>
    <p>my name is {{ name }}
    </p>
    <button @click="handleClick()">Click me</button>
  </main>
</template>
