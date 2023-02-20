<template>
  <Header />
</template>

<script lang="ts">
import Header from "@/components/header/Header.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    Header,
  },
})
export default class HomeView extends Vue {}
</script>
