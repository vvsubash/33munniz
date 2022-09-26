<script setup lang="ts">
import { Ref } from 'vue';

const productName: Ref<null | string> = ref(null);
const addProduct = () => { };
</script>

<template>
  <form @submit.prevent="addProduct">
    <fieldset>

      <label for="productImage">Upload Product Image</label>
      <input type="file" name="productImage" id="productImage">
    </fieldset>
    <fieldset>
      <label for="productName">Product name </label>
      <input type="text" id="productName" v-model="productName" />
    </fieldset>
    <fieldset>
      <label for="productPrice">Product Price</label>
      <input type="text" />
    </fieldset>
    <button type="submit" class="contrast">
      <u>
        <b> Add Product </b>
      </u>
    </button>
  </form>
  {{ productName }}
</template>

<style scoped>

</style>
