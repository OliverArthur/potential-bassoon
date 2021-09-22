<template>
  <div class="beer">
    <div class="beer__content">
        <div class="beer__content__item" v-for="item in beer">
          <beer-card
            :title="item.name!"
            :description="item.description!"
            :image-url="item.image_url!"
          >
          </beer-card>
        </div>
        <button @click="getRandomBeers">Get random beer</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import useBeer from "../hooks/useBeer";

import BeerCard from "../components/BeerCard.vue";

export default defineComponent({
  name: "AppBeer",
  components: {
    BeerCard,
  },
  setup() {
    const { getBeer, beer } = useBeer();

    const getRandomBeers = (): void => {
      getBeer();
    }

    onMounted(() => {
      getBeer();
    });

    return {
      // hooks
      beer,
      // methods
      getRandomBeers
    };
  },
});
</script>

<style lang="scss">
.beer {
  &__content {
    width: 600px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(44, 43, 42, 0.1), inset 0px -14px 62px rgba(0, 0, 0, 0.03);
    border-radius: 30px;
    overflow: hidden;
  }
  button {
    cursor: pointer;
    background-color: #0F62FE;
    border: 2px solid #0F62FE;
    color: #FFFFFF;
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.16px;
    line-height: 18px;
    padding: 16px;
    width: 100%;
  }
}
</style>
