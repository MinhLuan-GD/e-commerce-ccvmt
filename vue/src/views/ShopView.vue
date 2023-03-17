<template>
  <Header activity="shop" />
  <Content />
  <Footer />
</template>

<script lang="ts">
import Header from "@/components/header/Header.vue";
import Content from "@/components/shop/Content.vue";
import Footer from "@/components/footer/Footer.vue";
import { Options, Vue } from "vue-class-component";
import store from "@/store";
import { getProducts } from "@/api/product";
import { watch } from "vue";

@Options({
  components: {
    Content,
    Header,
    Footer,
  },
})
export default class ShopView extends Vue {
  created(): void {
    this.changeProduct();
    watch(() => this.$route.query.cate, this.changeProduct);
  }

  changeProduct() {
    if (this.$route.query.cate) {
      getProducts(`?category=${this.$route.query.cate}`).then(({ data }) => {
        store.dispatch("setProducts", data);
      });
    } else {
      getProducts().then(({ data }) => {
        store.dispatch("setProducts", data);
      });
    }
  }
}
</script>
