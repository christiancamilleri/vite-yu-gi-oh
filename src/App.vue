<script >
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  data() {
    return {

    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  }
}
</script>

<template>
  <div id="background">
    <AppHeader></AppHeader>

    <AppMain></AppMain>

    <AppFooter></AppFooter>
  </div>
</template>

<style lang="scss">
#background {
  background-image: url("https://images5.alphacoders.com/321/321887.jpg");
  height: 1000px;
}
</style>
