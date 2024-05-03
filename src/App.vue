<script>
import CustomToolbar from './components/CustomToolbar.vue'
import FooterView from "@/views/FooterView.vue";

export default {
  components: {
    FooterView,
    CustomToolbar
  }
}
</script>

<template>
  <div id="app">
    <CustomToolbar />
    <RouterView />
    <FooterView />
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  background-image: url('/src/assets/MainPageImage_002.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
