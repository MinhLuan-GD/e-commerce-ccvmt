<template>
  <Header activity="contact" />
  <Contact />
  <Footer />
</template>

<script lang="ts">
import Header from "@/components/header/Header.vue";
import Contact from "@/components/contact/Contact.vue";
import Footer from "@/components/footer/Footer.vue";

import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    Header,
    Contact,
    Footer,
  },
})
export default class ContactView extends Vue {}
</script>
