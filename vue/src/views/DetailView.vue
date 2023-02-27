<template>
  <Header />
  <Detail />
  <SuggestProduct />
  <Footer />
</template>

<script lang="ts">
import Header from "@/components/header/Header.vue";
import Detail from "@/components/detail/Detail.vue";
import Footer from "@/components/footer/Footer.vue";
import SuggestProduct from "@/components/detail/SuggestProduct.vue";

import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    Detail,
    Header,
    SuggestProduct,
    Footer,
  },
})
export default class DetailView extends Vue {}
</script>
