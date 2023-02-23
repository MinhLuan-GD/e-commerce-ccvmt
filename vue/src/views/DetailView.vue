<template>
  <Header />
  <Detail />
  <Footer />
</template>

<script lang="ts">
import Header from "@/components/header/Header.vue";
import Detail from "@/components/detail/Detail.vue";
import Footer from "@/components/footer/Footer.vue";

import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    Detail,
    Header,
    Footer,
  },
})
export default class DetailView extends Vue {}
</script>
