<template>
  <article class="food-menu">
    <div class="food-menu__header">
      <h1 class="food-menu__title">{{ dish }}</h1>
    </div>
    <div class="food-menu__body">
      <div class="food-menu__description">
        <p>{{ description }}</p>
      </div>
      <div class="food-menu__ingredient">
        <p><strong>Ingredient: </strong>{{ ingredient }}</p>
      </div>
      <div class="food-menu__measurement">
        <p><strong>Measurement: </strong>{{ measurement }}</p>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FoodMenu",
  props: {
    dish: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null
    },
    ingredient: {
      type: String,
      default: null
    },
    measurement: {
      type: String,
      default: null
    }
  }
});
</script>
<style lang="scss" scoped>
.food-menu {
  margin-top: 45px;
  &__header h1 {
    margin: 0;
    padding: 0;
    font-size: 1rem;
  }
  &__header,
  &__body {
    padding: 0 20px;
  }
}
</style>
