<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import store from "./store";

export default class App extends Vue {
  created() {
    store.dispatch("getUser");
    store.dispatch("getThreeCate");
    store.dispatch("getLocalCart");
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
