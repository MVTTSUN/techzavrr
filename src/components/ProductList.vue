<template>
  <ul class="catalog__list">
    <ProductItem v-for="(product, i) in products" :product="product" :key="i"/>
  </ul>
</template>

<script>
import ProductItem from './ProductItem.vue';

  export default {
    props: ['products'],
    components: { ProductItem }
}
</script>