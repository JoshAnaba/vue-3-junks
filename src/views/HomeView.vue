<script>
import { ref, reactive, computed } from "vue";

export default {
  name: "HomeView",
  setup() {
    // data
    const name = ref("Josh");
    const age = ref(30);
    // methods
    const dataObj = ref({
      name: "Anaba",
      age: 40,
    });
    const dataObjTwo = reactive({
      name: "Solo",
      age: 50,
    });
    // computed
    const computedName = computed(() => {
      return dataObj.value.name + " " + dataObjTwo.name;
    });
    const handleClick = () => {
      name.value = "Yo";
    };
    const updateDataObj = () => {
      // ref
      dataObj.value.age++;
      // reactive, their drawbacks is that primitive values cannot be updated reactively say, const house = reactive('bungalow'), a function cannot update the variable house
      dataObjTwo.age++;
    };
    return {
      // data
      name,
      age,
      dataObj,
      dataObjTwo,
      // methods
      handleClick,
      updateDataObj,
      // computed
      computedName
    };
  },
};
</script>

<template>
  <main>
    <div>
      <h1>Ref</h1>
      <p>my name is {{ dataObj.name }} and I am {{ dataObj.age }} years old</p>
      <button @click="handleClick()">Click me</button>
      <input type="text" v-model="dataObj.name" />
      <button @click="updateDataObj()">Update data obj</button>
    </div>
    <div>
      <h1>Reactive</h1>
      <p>
        my name is {{ dataObjTwo.name }} and I am {{ dataObjTwo.age }} years old
      </p>
      <p>{{ computedName }}</p>
    </div>
  </main>
</template>
