<template>
  <Header />
  <Cart />
  <Footer />
</template>

<script lang="ts">
import Header from "@/components/header/Header.vue";
import Cart from "@/components/cart/Cart.vue";
import Footer from "@/components/footer/Footer.vue";

import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    Cart,
    Header,
    Footer,
  },
})
export default class CartView extends Vue {}
</script>
