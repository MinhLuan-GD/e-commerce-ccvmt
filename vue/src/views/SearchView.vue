<template>
  <Header />
  <Search />
  <SuggestProduct />
  <Footer />
</template>

<script lang="ts">
import Header from "@/components/header/Header.vue";
import Search from "@/components/search/Search.vue";
import SuggestProduct from "@/components/detail/SuggestProduct.vue";
import Footer from "@/components/footer/Footer.vue";

import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    Search,
    Header,
    SuggestProduct,
    Footer,
  },
})
export default class SearchView extends Vue {}
</script>
