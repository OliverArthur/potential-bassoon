<template>
  <div class="food">
    <food-menu
      :dish="food?.dish"
      :description="food?.description"
      :ingredient="food?.ingredient"
      :measurement="food?.measurement">
    </food-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import useFodd from "../hooks/userFood";
import FoodMenu from '../components/FoodMenu.vue'

export default defineComponent({
  components: {
    FoodMenu,
  },
  name: "Food",
  setup() {
    const { food, getFood } = useFodd();

    onMounted(() => {
      getFood();
    })
    return {
      food
    };
  },
});
</script>
