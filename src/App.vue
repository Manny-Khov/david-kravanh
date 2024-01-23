<template>
  <div>
    <header>
      <div class="h-10 bg-gray-800 p-10 flex items-center">
        <h1 class="text-2xl text-white">Product</h1>
      </div>
    </header>

    <main class="mt-10">
        <h1>helo</h1>
    </main>
  </div>
</template>

<script setup lang="ts">
import {useProductsStore} from "@/stores/useProductStore.ts";
import {onMounted} from "vue";

onMounted(async () => {
  const productStore = useProductsStore();
  await productStore.fetchProducts()
  console.log(productStore.productsList)

})
</script>
