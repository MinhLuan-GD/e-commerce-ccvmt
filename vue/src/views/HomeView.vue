<template>
  <Header />
  <Banner />
  <Footer />
</template>

<script lang="ts">
import Footer from "@/components/footer/Footer.vue";
import Banner from "@/components/home/Banner.vue";
import Header from "@/components/header/Header.vue";

import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    Header,
    Banner,
    Footer,
  },
})
export default class HomeView extends Vue {}
</script>
