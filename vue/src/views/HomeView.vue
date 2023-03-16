<template>
  <Header activity="home" />
  <Banner />
  <RatingProduct :products="topProducts" />
  <NewProduct :products="newProducts" />
  <Footer />
</template>

<script lang="ts">
import Footer from "@/components/footer/Footer.vue";
import Banner from "@/components/home/Banner.vue";
import RatingProduct from "@/components/home/RatingProduct.vue";
import NewProduct from "@/components/home/NewProduct.vue";
import Header from "@/components/header/Header.vue";
import { Options, Vue } from "vue-class-component";
import store from "@/store";
import { Product } from "@/models/product";

@Options({
  components: {
    Header,
    Banner,
    RatingProduct,
    NewProduct,
    Footer,
  },
})
export default class HomeView extends Vue {
  newProducts: Product[] = [];
  topProducts: Product[] = [];

  created(): void {
    store.dispatch("getTopProducts").then((product) => {
      this.topProducts = product;
    });
    store.dispatch("getNewProducts").then((product) => {
      this.newProducts = product;
    });
  }
}
</script>
