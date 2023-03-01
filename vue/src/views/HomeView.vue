<template>
  <Header activity="home" />
  <Banner />
  <RatingProduct />
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
import { getNewProducts } from "@/api/products";
import { Product } from "@/utils/types";

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
    // store.dispatch("fetchProducts");
    getNewProducts().then((res) => {
      if (res.status === 200) {
        this.newProducts = res.data;
      } else {
        console.log(res);
      }
    });
  }
}
</script>
