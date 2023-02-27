<template>
  <Header />
  <Login />
  <Footer />
</template>

<script lang="ts">
import Header from "@/components/header/Header.vue";
import Login from "@/components/login/Login.vue";
import Footer from "@/components/footer/Footer.vue";

import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    Login,
    Header,
    Footer,
  },
})
export default class LoginView extends Vue {}
</script>
