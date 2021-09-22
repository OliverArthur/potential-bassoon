<template>
  <div class="app">
    <div class="app__header">
      <h1 class="app__title">Random Beers and Dishes</h1>
    </div>
    <div class="app__content">
      <beer></beer>
      <food></food>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Beer, Food } from './modules/';
</script>

<style lang="scss">
  body {
    padding: 0;
    margin: 0;
    background-color: #fafafa;
  }
  .app {
    font-family: 'Roboto', 'Open Sans', sans-serif;
    font-size: 16px;
    margin: 0 auto;
    max-width: 980px;
    &__content {
      display: grid;
      gap: 30px;
      grid-template-columns: 600px 360px;

    }
  }
</style>
