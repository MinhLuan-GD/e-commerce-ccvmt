<template>
  <Header activity="shop" />
  <Conten />
  <Footer />
</template>

<script lang="ts">
import Header from "@/components/header/Header.vue";
import Conten from "@/components/shop/Conten.vue";
import Footer from "@/components/footer/Footer.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    Conten,
    Header,
    Footer,
  },
})
export default class ShopView extends Vue {}
</script>
